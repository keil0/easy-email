import { IEmailTemplate } from 'easy-email-editor';
import { IBlockData } from 'easy-email-core';

export const convertImageUrlsToRelativeHtml = (htmlContent: string, imageUrls: string[]): string => {
  let updatedHtml = htmlContent;
  imageUrls.forEach((url, index) => {
    const relativeUrl = `./image${index + 1}.${url.split('.').pop()}`;
    updatedHtml = updatedHtml.replace(new RegExp(url, 'g'), relativeUrl);
  });
  return updatedHtml;
};

export const convertImageUrlsToRelativeMjml = (mjmlContent: string, imageUrls: string[]): string => {
  let updatedMjml = mjmlContent;
  imageUrls.forEach((url, index) => {
    const relativeUrl = `./image${index + 1}.${url.split('.').pop()}`;
    updatedMjml = updatedMjml.replace(new RegExp(url, 'g'), relativeUrl);
  });
  return updatedMjml;
};

export const convertImageUrlsToRelativeJson = (jsonContent: IEmailTemplate, imageUrls: string[]): IEmailTemplate => {
  let updatedJson = { ...jsonContent };
  const relativeUrls = imageUrls.map((url, index) => `./images/image${index + 1}.${url.split('.').pop()}`);

  const replaceUrls = (content: IBlockData) => {
    if (content.type === 'image') {
      imageUrls.forEach((url, index) => {
        if (content.data?.value?.src === url) {
          content.data.value.src = relativeUrls[index];
        }
      });
    }
    if (content.children) {
      content.children.forEach(replaceUrls);
    }
  };

  replaceUrls(updatedJson.content);

  return updatedJson;
};
