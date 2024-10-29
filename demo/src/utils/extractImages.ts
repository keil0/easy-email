import { IBlockData } from 'easy-email-core';

export const extractImageUrls = (node: IBlockData<any, any> | IBlockData<any, any>[], urls: string[] = []): string[] => {
  if (Array.isArray(node)) {
    node.forEach(child => extractImageUrls(child, urls));
  } else if (typeof node === 'object' && node !== null) {
    if (node.attributes?.src) {
      urls.push(node.attributes.src);
    }
    if (node.data?.value?.desktopImageUrl) {
      urls.push(node.data.value.desktopImageUrl);
    }
    if (node.data?.value?.mobileImageUrl) {
      urls.push(node.data.value.mobileImageUrl);
    }
    // Vérifier les enfants
    if (node.children) {
      extractImageUrls(node.children, urls);
    }
  }
  return urls;
};
