import { AdvancedType, IBlockData } from 'easy-email-core';

export const extractImageUrls = (node: IBlockData<any, any> | IBlockData<any, any>[], urls: string[] = []): string[] => {
  if (Array.isArray(node)) {
    node.forEach(child => extractImageUrls(child, urls));
  } else if (typeof node === 'object' && node !== null) {
    // Vérifier les URLs d'images dans les nœuds de type advanced_image
    if (node.type === AdvancedType.IMAGE && node.attributes?.src) {
      urls.push(node.attributes.src);
    }
    // Vérifier les URLs d'images dans les nœuds de type TOP
    if (node.type === 'TOP') {
      if (node.data?.value?.desktopImageUrl) {
        urls.push(node.data.value.desktopImageUrl);
      }
      if (node.data?.value?.mobileImageUrl) {
        urls.push(node.data.value.mobileImageUrl);
      }
    }
    // Vérifier les URLs d'images dans les nœuds de type advanced_social
    if (node.type === 'advanced_social' && node.data?.value?.elements) {
      node.data.value.elements.forEach((element: any) => {
        if (element.src) {
          urls.push(element.src);
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
