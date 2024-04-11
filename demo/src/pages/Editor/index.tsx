import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import template from '@demo/store/template';
import { useAppSelector } from '@demo/hooks/useAppSelector';
import { useLoading } from '@demo/hooks/useLoading';
import {
  Button,
  ConfigProvider,
  Dropdown,
  Notification,
  Menu,
  PageHeader,
} from '@arco-design/web-react';
import { useHistory, useParams } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import { Loading } from '@demo/components/loading';
import mjml from 'mjml-browser';
import services from '@demo/services';
import { IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';
import { saveAs } from 'file-saver';
import {
  EmailEditor,
  EmailEditorProvider,
  IEmailTemplate,
} from 'easy-email-editor';
import { Stack } from '@demo/components/Stack';

import { AdvancedType, IBlockData, JsonToMjml } from 'easy-email-core';
import {
  ExtensionProps,
  MjmlToJson,
  StandardLayout,
} from 'easy-email-extensions';
import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';
import '@arco-themes/react-easy-email-theme/css/arco.css';
import { useWindowSize } from 'react-use';
import { Uploader } from '@demo/utils/Uploader';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { WarnAboutUnsavedChanges } from '@demo/components/WarnAboutUnsavedChanges';

interface IEmailTemplateModel extends IEmailTemplate {
  id?: number
}

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
  },
];

const imageCompression = import('browser-image-compression');

const fontList = [
  'Helvetica, Arial, Verdana, sans serif',
].map(item => ({ value: item, label: item }));

type UrlParams = {
  id?: number
}

export default function Editor() {
  const params = useParams<UrlParams>();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const templateData: IEmailTemplateModel | null = useAppSelector('template');
  const { width } = useWindowSize();
  const smallScene = width < 1400;
  const loading = useLoading(template.loadings.fetchById);

  // Dark mode switch
  useEffect(() => {
    if (isDarkMode) {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.removeAttribute('arco-theme');
    }
  }, [isDarkMode]);

  // Load template
  useEffect(() => {
    if (params.id) {
      dispatch(template.actions.fetchById({ id: params.id }));
    } else {
      dispatch(template.actions.fetchDefaultTemplate(undefined));
    }
  }, [dispatch]);

  // Update route if template is saved
  useEffect(() => {
    if (templateData && templateData.id) {
      history.replace(`/editor/${templateData.id}`);
    }
  }, [templateData]);

  const onUploadImage = async (blob: Blob) => {
    // TODO: Process upload image
    console.log('TODO: Process upload image');
    const compressionFile = await (
      await imageCompression
    ).default(blob as File, {
      maxWidthOrHeight: 1440,
    });
    if (templateData && templateData.id) {
      return services.common.uploadImageToBackend(compressionFile, templateData.id);
    } else {
      return services.common.uploadImageToBackend(compressionFile);
    }
  };

  const onImportMJML = async ({ restart }: { restart: (val: IEmailTemplate) => void; }) => {
    const uploader = new Uploader(() => Promise.resolve(''), {
      accept: 'text/mjml',
      limit: 1,
    });
    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const pageData = await new Promise<[string, IEmailTemplate['content']]>(
      (resolve, reject) => {
        reader.onload = function(evt) {
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

  const onImportJSON = async ({ restart }: { restart: (val: IEmailTemplate) => void; }) => {
    const uploader = new Uploader(() => Promise.resolve(''), {
      accept: 'application/json',
      limit: 1,
    });
    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    const emailTemplate = await new Promise<IEmailTemplate>((resolve, reject) => {
      reader.onload = function(evt) {
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

  const onExportImage = () => {
    Notification.info({
      title: 'TODO',
      content: 'Export images',
    });
  };

  const handleSave = (restart, values) => {
    try {
      if (params.id) {
        dispatch(template.actions.updateById({ id: params.id, template: values }));
        restart(values);
        Notification.success({
          title: 'Success',
          content: 'Template updated successfully',
        });
      } else {
        dispatch(template.actions.create(values));
        restart(values);
        Notification.success({
          title: 'Success',
          content: 'Template created successfully',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues: IEmailTemplateModel | null = useMemo(() => {
    if (!templateData) return null;
    const sourceData = cloneDeep(templateData.content) as IBlockData;
    return {
      ...templateData,
      content: sourceData, // replace standard block
    };
  }, [templateData]);

  if (!templateData && loading) {
    return (
      <Loading loading={loading}>
        <div style={{ height: '100vh' }} />
      </Loading>
    );
  }

  if (!initialValues) return <div>Template cannot be loaded...</div>;

  return (
    <ConfigProvider locale={enUS}>
      <div>
        <EmailEditorProvider
          key={'id'}
          height={'calc(100vh - 68px)'}
          data={initialValues}
          onUploadImage={onUploadImage}
          fontList={fontList}
          autoComplete
          enabledLogic
          dashed={false}
        >
          {({ values }, { submit, restart }) => {
            return (
              <>
                <PageHeader
                  style={{ background: 'var(--color-bg-2)' }}
                  backIcon
                  title="Edit"
                  onBack={() => history.push('/')}
                  extra={
                    <Stack alignment="center">
                      <Button
                        onClick={() => setIsDarkMode(v => !v)}
                        shape="circle"
                        type="text"
                        icon={isDarkMode ? <IconMoonFill /> : <IconSunFill />}
                      />
                      <Dropdown
                        droplist={
                          <Menu>
                            <Menu.Item
                              key="MJML"
                              onClick={() => onImportMJML({ restart })}
                            >
                              Import from MJML
                            </Menu.Item>

                            <Menu.Item
                              key="JSON"
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
                              key="Export MJML"
                              onClick={() => onExportMJML(values)}
                            >
                              Export MJML
                            </Menu.Item>
                            <Menu.Item
                              key="Export HTML"
                              onClick={() => onExportHTML(values)}
                            >
                              Export HTML
                            </Menu.Item>
                            <Menu.Item
                              key="Export JSON"
                              onClick={() => onExportJSON(values)}
                            >
                              Export JSON
                            </Menu.Item>
                            <Menu.Item
                              key="Export Image"
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
                        onClick={() => handleSave(restart, values)}
                        type="primary"
                        status="success"
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
                <WarnAboutUnsavedChanges />
              </>
            );
          }}
        </EmailEditorProvider>
      </div>
    </ConfigProvider>
  );
}
