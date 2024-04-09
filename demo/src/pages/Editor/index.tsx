import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import template from '@demo/store/template';
import { useAppSelector } from '@demo/hooks/useAppSelector';
import { useLoading } from '@demo/hooks/useLoading';
import {
  Button,
  ConfigProvider,
  Dropdown,
  Notification,
  Form,
  Input,
  Menu,
  Message,
  Modal,
  PageHeader,
} from '@arco-design/web-react';
import { useQuery } from '@demo/hooks/useQuery';
import { useHistory } from 'react-router-dom';
import { cloneDeep, set, isEqual } from 'lodash';
import { Loading } from '@demo/components/loading';
import mjml from 'mjml-browser';
import services from '@demo/services';
import { IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';
import { Liquid } from 'liquidjs';
import { saveAs } from 'file-saver';
import {
  EmailEditor,
  EmailEditorProvider,
  EmailEditorProviderProps,
  IEmailTemplate,
} from 'easy-email-editor';
import { Stack } from '@demo/components/Stack';

import { FormApi } from 'final-form';
import { UserStorage } from '@demo/utils/user-storage';
import { AdvancedType, BasicType, IBlockData, JsonToMjml } from 'easy-email-core';
import {
  ExtensionProps,
  MjmlToJson,
  StandardLayout,
} from 'easy-email-extensions';
import { AutoSaveAndRestoreEmail } from '@demo/components/AutoSaveAndRestoreEmail';
import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';
import blueTheme from '@arco-themes/react-easy-email-theme/css/arco.css?inline';
import purpleTheme from '@arco-themes/react-easy-email-theme-purple/css/arco.css?inline';
import greenTheme from '@arco-themes/react-easy-email-theme-green/css/arco.css?inline';
import { useWindowSize } from 'react-use';
import { Uploader } from '@demo/utils/Uploader';
import enUS from '@arco-design/web-react/es/locale/en-US';


const defaultCategories: ExtensionProps['categories'] = [
  {
    label: 'Content',
    active: true,
    blocks: [
      {
        type: AdvancedType.TEXT,
      },
      {
        type: AdvancedType.IMAGE,
        payload: { attributes: { padding: '0px 0px 0px 0px' } },
      },
      {
        type: AdvancedType.BUTTON,
      },
      {
        type: AdvancedType.SOCIAL,
      },
      {
        type: AdvancedType.DIVIDER,
      },
      {
        type: AdvancedType.SPACER,
      },
      {
        type: AdvancedType.HERO,
      },
      {
        type: AdvancedType.WRAPPER,
      },
    ],
  },
  {
    label: 'Layout',
    active: true,
    displayType: 'column',
    blocks: [
      {
        title: '2 columns',
        payload: [
          ['50%', '50%'],
          ['33%', '67%'],
          ['67%', '33%'],
          ['25%', '75%'],
          ['75%', '25%'],
        ],
      },
      {
        title: '3 columns',
        payload: [
          ['33.33%', '33.33%', '33.33%'],
          ['25%', '25%', '50%'],
          ['50%', '25%', '25%'],
        ],
      },
      {
        title: '4 columns',
        payload: [['25%', '25%', '25%', '25%']],
      },
    ],
  }
];

const imageCompression = import('browser-image-compression');

const fontList = [
  'Helvetica, Arial, Verdana, sans serif',
].map(item => ({ value: item, label: item }));

export default function Editor() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const templateData = useAppSelector('template');
  const [locale, setLocale] = useState('en');
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const { width } = useWindowSize();
  const smallScene = width < 1400;
  const { id, userId } = useQuery();
  const loading = useLoading(template.loadings.fetchById);
  const isSubmitting = useLoading([
    template.loadings.create,
    template.loadings.updateById,
  ]);

  useEffect(() => {
    if (id) {
      if (!userId) {
        UserStorage.getAccount().then(account => {
          dispatch(template.actions.fetchById({ id: +id, userId: account.user_id }));
        });
      } else {
        dispatch(template.actions.fetchById({ id: +id, userId: +userId }));
      }
    } else {
      dispatch(template.actions.fetchDefaultTemplate(undefined));
    }

    return () => {
      dispatch(template.actions.set(null));
    };
  }, [dispatch, id, userId]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.removeAttribute('arco-theme');
    }
  }, [isDarkMode]);

  const onUploadImage = async (blob: Blob) => {
    // TODO: Process upload image
    console.log("");
    const compressionFile = await (
      await imageCompression
    ).default(blob as File, {
      maxWidthOrHeight: 1440,
    });
    return services.common.uploadByQiniu(compressionFile);
  };

  const onImportMJML = async ({
    restart,
  }: {
    restart: (val: IEmailTemplate) => void;
  }) => {
    const uploader = new Uploader(() => Promise.resolve(''), {
      accept: 'text/mjml',
      limit: 1,
    });

    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const pageData = await new Promise<[string, IEmailTemplate['content']]>(
      (resolve, reject) => {
        reader.onload = function (evt) {
          if (!evt.target) {
            reject();
            return;
          }
          try {
            const pageData = MjmlToJson(evt.target.result as any);
            resolve([file.name, pageData]);
          } catch (error) {
            reject();
          }
        };
        reader.readAsText(file);
      },
    );

    restart({
      subject: pageData[0],
      content: pageData[1],
      subTitle: '',
    });
  };

  const onImportJSON = async ({
    restart,
  }: {
    restart: (val: IEmailTemplate) => void;
  }) => {
    const uploader = new Uploader(() => Promise.resolve(''), {
      accept: 'application/json',
      limit: 1,
    });

    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const emailTemplate = await new Promise<IEmailTemplate>((resolve, reject) => {
      reader.onload = function (evt) {
        if (!evt.target) {
          reject();
          return;
        }
        try {
          const template = JSON.parse(evt.target.result as any) as IEmailTemplate;
          resolve(template);
        } catch (error) {
          reject();
        }
      };
      reader.readAsText(file);
    });

    restart({
      subject: emailTemplate.subject,
      content: emailTemplate.content,
      subTitle: emailTemplate.subTitle,
    });
  };

  const onExportMJML = (values: IEmailTemplate) => {
    const mjmlString = JsonToMjml({
      data: values.content,
      mode: 'production',
      context: values.content,
    });
    navigator.clipboard.writeText(mjmlString);
    saveAs(new Blob([mjmlString], { type: 'text/mjml' }), 'easy-email.mjml');
  };

  const onExportHTML = (values: IEmailTemplate) => {
    const mjmlString = JsonToMjml({
      data: values.content,
      mode: 'production',
      context: values.content,
    });

    const html = mjml(mjmlString, {}).html;

    navigator.clipboard.writeText(html);
    saveAs(new Blob([html], { type: 'text/html' }), 'easy-email.html');
  };

  const onExportJSON = (values: IEmailTemplate) => {
    navigator.clipboard.writeText(JSON.stringify(values, null, 2));
    saveAs(
      new Blob([JSON.stringify(values, null, 2)], { type: 'application/json' }),
      'easy-email.json',
    );
  };


  const initialValues: IEmailTemplate | null = useMemo(() => {
    if (!templateData) return null;
    const sourceData = cloneDeep(templateData.content) as IBlockData;
    return {
      ...templateData,
      content: sourceData, // replace standard block
    };
  }, [templateData]);

  const onSubmit = useCallback(
    async (
      values: IEmailTemplate,
      form: FormApi<IEmailTemplate, Partial<IEmailTemplate>>,
    ) => {
      if (id) {
        const isChanged = !(
          isEqual(initialValues?.content, values.content) &&
          isEqual(initialValues?.subTitle, values?.subTitle) &&
          isEqual(initialValues?.subject, values?.subject)
        );

        if (!isChanged) {
          Message.success('Updated success!');
          form.restart(values);
          return;
        }
        dispatch(
          template.actions.updateById({
            id: +id,
            template: values,
            success() {
              Message.success('Updated success!');
              form.restart(values);
            },
          }),
        );
      } else {
        dispatch(
          template.actions.create({
            template: values,
            success(id, newTemplate) {
              Message.success('Saved success!');
              form.restart(newTemplate);
              history.replace(`/editor?id=${id}`);
            },
          }),
        );
      }
    },
    [dispatch, history, id, initialValues],
  );

  const onSave = () => {
    console.log("SAVE");
    Notification.success({
      title: 'Success',
      content: 'Template saved successfully',
    })
  }

  const onBeforePreview: EmailEditorProviderProps['onBeforePreview'] = useCallback(
    (html: string, mergeTags) => {
      const engine = new Liquid();
      const tpl = engine.parse(html);
      return engine.renderSync(tpl, mergeTags);
    },
    [],
  );

  if (!templateData && loading) {
    return (
      <Loading loading={loading}>
        <div style={{ height: '100vh' }} />
      </Loading>
    );
  }

  if (!initialValues) return null;

  return (
    <ConfigProvider locale={enUS}>
      <div>
        <style>{blueTheme}</style>
        <EmailEditorProvider
          key={id}
          height={'calc(100vh - 68px)'}
          data={initialValues}
          // interactiveStyle={{
          //   hoverColor: '#78A349',
          //   selectedColor: '#1890ff',
          // }}
          // onAddCollection={addCollection}
          // onRemoveCollection={({ id }) => removeCollection(id)}
          onUploadImage={onUploadImage}
          fontList={fontList}
          autoComplete
          enabledLogic
          dashed={false}
          socialIcons={[]}
        >
          {({ values }, { submit, restart }) => {
            return (
              <>
                <PageHeader
                  style={{ background: 'var(--color-bg-2)' }}
                  backIcon
                  title='Edit'
                  onBack={() => history.push('/')}
                  extra={
                    <Stack alignment='center'>
                      <Button
                        onClick={() => setIsDarkMode(v => !v)}
                        shape='circle'
                        type='text'
                        icon={isDarkMode ? <IconMoonFill /> : <IconSunFill />}
                      ></Button>
                      <Dropdown
                        droplist={
                          <Menu>
                            <Menu.Item
                              key='MJML'
                              onClick={() => onImportMJML({ restart })}
                            >
                              Import from MJML
                            </Menu.Item>

                            <Menu.Item
                              key='JSON'
                              onClick={() => onImportJSON({ restart })}
                            >
                              Import from JSON
                            </Menu.Item>
                          </Menu>
                        }
                      >
                        <Button>
                          <strong>Import</strong>
                        </Button>
                      </Dropdown>

                      <Dropdown
                        droplist={
                          <Menu>
                            <Menu.Item
                              key='Export MJML'
                              onClick={() => onExportMJML(values)}
                            >
                              Export MJML
                            </Menu.Item>
                            <Menu.Item
                              key='Export HTML'
                              onClick={() => onExportHTML(values)}
                            >
                              Export HTML
                            </Menu.Item>
                            <Menu.Item
                              key='Export JSON'
                              onClick={() => onExportJSON(values)}
                            >
                              Export JSON
                            </Menu.Item>
                            <Menu.Item
                              key='Export Image'
                              onClick={() => onExportImage(values)}
                            >
                              Export Image
                            </Menu.Item>
                          </Menu>
                        }
                      >
                        <Button>
                          <strong>Export</strong>
                        </Button>
                      </Dropdown>
                      <Button
                        onClick={onSave}
                        type='primary'
                        status='success'
                      >Save</Button>
                    </Stack>
                  }
                />
                <StandardLayout
                  compact={!smallScene}
                  categories={defaultCategories}
                >
                  <EmailEditor />
                </StandardLayout>
                <AutoSaveAndRestoreEmail />
              </>
            );
          }}
        </EmailEditorProvider>
      </div>
    </ConfigProvider>
  );
}

function replaceStandardBlockToAdvancedBlock(blockData: IBlockData) {
  const map = {
    [BasicType.TEXT]: AdvancedType.TEXT,
    [BasicType.BUTTON]: AdvancedType.BUTTON,
    [BasicType.IMAGE]: AdvancedType.IMAGE,
    [BasicType.DIVIDER]: AdvancedType.DIVIDER,
    [BasicType.SPACER]: AdvancedType.SPACER,
    [BasicType.SOCIAL]: AdvancedType.SOCIAL,
    [BasicType.ACCORDION]: AdvancedType.ACCORDION,
    [BasicType.CAROUSEL]: AdvancedType.CAROUSEL,
    [BasicType.NAVBAR]: AdvancedType.NAVBAR,
    [BasicType.WRAPPER]: AdvancedType.WRAPPER,
    [BasicType.SECTION]: AdvancedType.SECTION,
    [BasicType.GROUP]: AdvancedType.GROUP,
    [BasicType.COLUMN]: AdvancedType.COLUMN,
  };

  if (map[blockData.type]) {
    blockData.type = map[blockData.type];
  }
  blockData.children.forEach(replaceStandardBlockToAdvancedBlock);
  return blockData;
}
