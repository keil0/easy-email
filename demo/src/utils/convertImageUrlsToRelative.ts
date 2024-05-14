export const convertImageUrlsToRelative = (htmlContent: string, imageUrls: string[]): string => {
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
