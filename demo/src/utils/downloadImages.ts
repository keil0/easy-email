import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { request } from '@demo/services/axios.config';

export const downloadImagesAsZip = async (imageUrls: string[]) => {
  const zip = new JSZip();
  const imgFolder = zip.folder('images');

  const imagePromises = imageUrls.map(async (url, index) => {
    try {
      if (imgFolder) {
        const response = await request.get<Blob>(url, { responseType: 'blob' });
        const blob: Blob = new Blob([response], { type: response.type });
        imgFolder.file(`image${index + 1}.${blob.type.split('/')[1]}`, blob, { binary: true });
      }
    } catch (error) {
      console.error('Error downloading image:', url, error);
    }
  });

  await Promise.all(imagePromises);

  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, 'images.zip');
  });
};
