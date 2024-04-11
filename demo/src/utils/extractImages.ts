import { IBlockData } from 'easy-email-core';

export const extractImageUrls = (node: IBlockData<any, any> | IBlockData<any, any>[], urls: string[] = []): string[] => {
  if (Array.isArray(node)) {
    node.forEach(child => extractImageUrls(child, urls));
  } else if (typeof node === 'object' && node !== null) {
    if (node.type === 'advanced_image' && node.attributes?.src) {
      urls.push(node.attributes.src);
    }
    if (node.children) {
      extractImageUrls(node.children, urls);
    }
  }
  return urls;
};