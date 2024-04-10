import { useAppSelector } from '@demo/hooks/useAppSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Frame from '@demo/components/Frame';
import { Button, Notification } from '@arco-design/web-react';
import { CardItem } from '../../components/CardItem';
import { Stack } from '@demo/components/Stack';
import { history } from '@demo/utils/history';
import templates from '@demo/store/templates';

export default function Home() {
  const dispatch = useDispatch();
  const templatesState = useAppSelector('templates');

  const handleDelete = (id: number) => {
    dispatch(templates.actions.deleteById({ id }));
    Notification.success({
      title: 'Success',
      content: 'Template deleted successfully',
    });
  }

  useEffect(() => {
    dispatch(templates.actions.fetch(undefined));
  }, [dispatch]);

  return (
    <Frame
      title='Templates'
      primaryAction={
        <Button
          type='primary'
          size="large"
          onClick={() => {
            history.push(`/editor/new`);
          }}
        >
          Create
        </Button>
      }
    >
      <>
        <Stack>
          {[ ...templatesState].map((item) => (
            <CardItem data={item} key={item.id} handleDelete={handleDelete} />
          ))}
        </Stack>
      </>
    </Frame>
  );
}
