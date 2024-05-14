import { IBlockData } from 'easy-email-core';

export const extractImageUrls = (node: IBlockData<any, any> | IBlockData<any, any>[], urls: string[] = []): string[] => {
  if (Array.isArray(node)) {
    node.forEach(child => extractImageUrls(child, urls));
  } else if (typeof node === 'object' && node !== null) {
    // Vérifier les URLs d'images dans les nœuds de type advanced_image
    if (node.type === 'advanced_image' && node.attributes?.src) {
      urls.push(node.attributes.src);
    }
    // Vérifier les URLs d'images dans les nœuds de type TOP
    if (node.type === 'TOP' && node.data?.value?.desktopImageUrl) {
      urls.push(node.data.value.desktopImageUrl);
    }
    if (node.type === 'TOP' && node.data?.value?.mobileImageUrl) {
      urls.push(node.data.value.mobileImageUrl);
    }
    // Vérifier les URLs d'images dans les nœuds de type RESPONSIVE_IMAGE
    if (node.type === 'RESPONSIVE_IMAGE' && node.children) {
      node.children.forEach(child => {
        if (child.type === 'advanced_image' && child.attributes?.src) {
          urls.push(child.attributes.src);
        }
      });
    }
    // Vérifier les enfants
    if (node.children) {
      extractImageUrls(node.children, urls);
    }
  }
  return urls;
};
