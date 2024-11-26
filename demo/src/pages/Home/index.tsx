import { useAppSelector } from '@demo/hooks/useAppSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Frame from '@demo/components/Frame';
import { Button, Notification } from '@arco-design/web-react';
import { CardItem } from '../../components/CardItem';
import { Stack } from '@demo/components/Stack';
import { history } from '@demo/utils/history';
import templates from '@demo/store/templates';
import template from '@demo/store/template';
import services from '@demo/services';

export default function Home() {
  const dispatch = useDispatch();
  const templatesState = useAppSelector('templates');

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this template?')) {
      dispatch(templates.actions.deleteById({ id }));
      Notification.success({
        title: 'Success',
        content: 'Template deleted successfully',
      });
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }

      // Reset the file input value to allow re-selecting the same files
      event.target.value = '';

      try {
        await services.common.uploadImagesToBackend(formData);
        Notification.success({
          title: 'Success',
          content: 'Images uploaded successfully',
        });
      } catch (e) {
        Notification.error({
          title: 'Error',
          content: 'Failed to upload images',
        });
      }
    }
  };

  useEffect(() => {
    dispatch(template.actions.reset(undefined));
    dispatch(templates.actions.fetch(undefined));
  }, [dispatch]);

  return (
    <Frame
      title="Templates"
      primaryAction={
        <div style={{ display: 'flex', gap: 10 }}>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            id="hiddenFileInput"
          />
          <Button
            type="secondary"
            size="large"
            onClick={() => {
              document.getElementById('hiddenFileInput')?.click();
            }}
          >
            Upload images
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              history.push(`/editor/new`);
            }}
          >
            Create
          </Button>

        </div>
      }
    >
      <>
        <Stack>
          {[...templatesState].map((item) => (
            <CardItem data={item} key={item.id} handleDelete={handleDelete} />
          ))}
        </Stack>
      </>
    </Frame>
  );
}
