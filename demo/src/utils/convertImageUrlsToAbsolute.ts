import { IEmailTemplate } from 'easy-email-editor';
import { AdvancedType, IBlockData } from 'easy-email-core';

export const convertRelativeUrlsToAbsoluteMjml = (mjmlContent: string, baseUrl: string): string => {
  return mjmlContent.replace(/(?:src|href)="([^http][^"]*)"/g, (match, relativePath) => {
    const absoluteUrl = `${baseUrl}${relativePath}`;
    return match.replace(relativePath, absoluteUrl);
  });
};

export const convertRelativeUrlsToAbsoluteJson = (
  jsonContent: IEmailTemplate,
  baseUrl: string
): IEmailTemplate => {
  const updatedJson = { ...jsonContent };

  const replaceUrls = (content: IBlockData) => {
    if (content.type === AdvancedType.IMAGE && content.attributes?.src) {
      const src = content.attributes.src;
      if (!src.startsWith('http')) {
        content.attributes.src = `${baseUrl}${src}`;
      }
    }

    if (content.children) {
      content.children.forEach(replaceUrls);
    }
  };

  replaceUrls(updatedJson.content);

  return updatedJson;
};
