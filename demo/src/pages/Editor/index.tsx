import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import template from '@demo/store/template';
import { useAppSelector } from '@demo/hooks/useAppSelector';
import { useLoading } from '@demo/hooks/useLoading';
import { Button, ConfigProvider, Dropdown, Menu, Notification, PageHeader } from '@arco-design/web-react';
import { useHistory, useParams } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import { Loading } from '@demo/components/loading';
import mjml from 'mjml-browser';
import services from '@demo/services';
import { IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';
import { saveAs } from 'file-saver';
import { EmailEditor, EmailEditorProvider, IEmailTemplate } from 'easy-email-editor';
import { Stack } from '@demo/components/Stack';

import { AdvancedType, BasicType, IBlockData, InnoceanBlocksType, JsonToMjml } from 'easy-email-core';
import { ExtensionProps, MjmlToJson, StandardLayout } from 'easy-email-extensions';
import 'easy-email-editor/lib/style.css';
import 'easy-email-extensions/lib/style.css';
import '@arco-themes/react-easy-email-theme/css/arco.css';
import { useWindowSize } from 'react-use';
import { Uploader } from '@demo/utils/Uploader';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { WarnAboutUnsavedChanges } from '@demo/components/WarnAboutUnsavedChanges';
import { extractImageUrls } from '@demo/utils/extractImages';
import JSZip from 'jszip';
import { request } from '@demo/services/axios.config';
import {
  convertImageUrlsToRelativeHtml,
  convertImageUrlsToRelativeJson,
  convertImageUrlsToRelativeMjml,
} from '@demo/utils/convertImageUrlsToRelative';
import { formatHtml } from '@demo/utils/formatHtml';
import { convertEmailTemplate } from '@demo/utils/refactorResponsiveImage';

const imageCompression = import('browser-image-compression');

export interface IEmailTemplateModel extends IEmailTemplate {
  id?: number;
}

const defaultCategories: ExtensionProps['categories'] = [
  {
    label: 'Content',
    active: true,
    blocks: [
      {
        type: BasicType.TEXT,
      },
      {
        type: AdvancedType.TEXT,
      },
      {
        type: AdvancedType.IMAGE,
        payload: {
          attributes: {
            padding: '0px 0px 0px 0px',
            src: 'https://dummyimage.com/600x300/002c5f/fff.png&text=image'
          },
        },
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
    label: 'Innocean',
    active: true,
    blocks: [
      {
        type: InnoceanBlocksType.TOP
      },
      {
        type: InnoceanBlocksType.RESPONSIVE_IMAGE
      },
      {
        type: InnoceanBlocksType.BUTTON
      },
      {
        type: InnoceanBlocksType.TEXT_BLOCK
      },
      {
        type: InnoceanBlocksType.TITLE_IMAGE_BLOCK,
      },
      {
        type: InnoceanBlocksType.HERO
      },
      {
        type: InnoceanBlocksType.TWO_COLUMNS
      },
      {
        type: InnoceanBlocksType.THREE_COLUMNS
      },
      {
        type: InnoceanBlocksType.FOUR_COLUMNS
      },
      {
        type: InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA
      },
      {
        type: InnoceanBlocksType.SLICE_BACKGROUND_CTA_IMAGE
      },
      {
        type: InnoceanBlocksType.SIDE_IMAGE
      },
      {
        type: InnoceanBlocksType.SLICE_IMAGE_CTA
      },
      {
        type: InnoceanBlocksType.SLICE_CTA_IMAGE
      },
      {
        type: InnoceanBlocksType.FOOTER
      },
      {
        type: InnoceanBlocksType.POLLUSCORE
      }
    ]
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

export const onUploadImage = async (blob: Blob) => {
  const MAX_SIZE = 1024 * 1024; // 1MB
  // Types MIME autorisés
  const ALLOWED_TYPES = ['image/jpg','image/jpeg', 'image/png', 'image/gif'];

  if (blob.size > MAX_SIZE) {
    Notification.error({
      title: 'Erreur',
      content: 'Le fichier est trop volumineux',
    });
    throw new Error('Le fichier est trop volumineux');
  }

  if (!ALLOWED_TYPES.includes(blob.type)) {
    Notification.error({
      title: 'Erreur',
      content: 'Type de fichier non autorisé',
    });
    throw new Error('Type de fichier non autorisé');
  }

  const compressionFile = await (
    await imageCompression
  ).default(blob as File, {
    maxWidthOrHeight: 1440,
  });

  return services.common.uploadImageToBackend(compressionFile);
};

const fontList = [
  'Helvetica, Arial, Verdana, sans serif',
].map(item => ({ value: item, label: item }));

type UrlParams = {
  id?: string
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

  const defineDoctype = (content: string) => {
    const newDoctype = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`;
    return content.replace(/<!doctype html>/i, newDoctype);
  }

  const onExportZip = async (values: IEmailTemplate) => {
    const clonedValues = structuredClone(values);

    let mjmlString = JsonToMjml({
      data: clonedValues.content,
      mode: 'production',
      context: clonedValues.content,
    });

    let html = defineDoctype(mjml(mjmlString, {}).html);

    if (templateData) {
      const imageUrls = extractImageUrls(templateData.content);
      const zip = new JSZip();

      const downloadResults = await Promise.all(imageUrls.map(async (url, index) => {
        const relativeUrl = url.startsWith('http') ? new URL(url).pathname : url

        try {
          const response = await request.get<Blob>(relativeUrl, { responseType: 'blob', baseURL: '' });
          const blob: Blob = new Blob([response], { type: response.type });
          const filename = `image${index + 1}.${blob.type.split('/')[1]}`;
          zip.file(filename, blob, { binary: true });
          return { url, filename, success: true };
        } catch (error) {
          console.error('Error downloading image:', relativeUrl, error);
          return { url, filename: undefined, success: false };
        }
      }));

      const successfulDownloads = downloadResults.filter(result => result.success);
      const successfulImageUrls = successfulDownloads.map(result => result.url);
      const imageFilenames = successfulDownloads.map(result => result.filename).filter((filename): filename is string => !!filename);

      const updatedHtml = convertImageUrlsToRelativeHtml(html, successfulImageUrls, imageFilenames);
      const updatedMjmlString = convertImageUrlsToRelativeMjml(mjmlString, successfulImageUrls, imageFilenames);
      const updatedJsonContent = convertImageUrlsToRelativeJson(clonedValues, successfulImageUrls, imageFilenames);

      const refactoredHtml = convertEmailTemplate(updatedHtml);
      const formatedHtml = formatHtml(refactoredHtml);

      zip.file('index.html', formatedHtml);
      zip.file('template.mjml', updatedMjmlString);
      zip.file('export.json', JSON.stringify(updatedJsonContent, null, 2));

      zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, 'template.zip');
      });
    }
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
          {({ values }, { restart }) => {
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
                      <Button onClick={() => onExportZip(values)}>
                        <strong>Export</strong>
                     </Button>
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
