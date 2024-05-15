import { IEmailTemplate } from 'easy-email-editor';
import { AdvancedType, IBlockData } from 'easy-email-core';

export const convertImageUrlsToRelativeHtml = (htmlContent: string, imageUrls: string[], imageFilenames: string[]): string => {
  let updatedHtml = htmlContent;
  imageUrls.forEach((url, index) => {
    if (imageFilenames[index]) {
      const relativeUrl = `./${imageFilenames[index]}`;
      updatedHtml = updatedHtml.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), relativeUrl);
    }
  });
  return updatedHtml;
};

export const convertImageUrlsToRelativeMjml = (mjmlContent: string, imageUrls: string[], imageFilenames: string[]): string => {
  let updatedMjml = mjmlContent;
  imageUrls.forEach((url, index) => {
    if (imageFilenames[index]) {
      const relativeUrl = `./${imageFilenames[index]}`;
      updatedMjml = updatedMjml.replace(new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), relativeUrl);
    }
  });
  return updatedMjml;
};

export const convertImageUrlsToRelativeJson = (jsonContent: IEmailTemplate, imageUrls: string[], imageFilenames: string[]): IEmailTemplate => {
  let updatedJson = { ...jsonContent };

  const replaceUrls = (content: IBlockData) => {
    if (content.type === AdvancedType.IMAGE && content.attributes?.src) {
      imageUrls.forEach((url, index) => {
        if (content.attributes.src === url && imageFilenames[index]) {
          content.attributes.src = `./${imageFilenames[index]}`;
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
