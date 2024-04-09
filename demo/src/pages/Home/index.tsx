import { useAppSelector } from '@demo/hooks/useAppSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Frame from '@demo/components/Frame';
import templateList from '@demo/store/templateList';
import { Button } from '@arco-design/web-react';
import { CardItem } from './components/CardItem';
import { Stack } from '@demo/components/Stack';
import { history } from '@demo/utils/history';


export default function Home() {
  const dispatch = useDispatch();
  const list = useAppSelector('templateList');

  useEffect(() => {
    dispatch(templateList.actions.fetch(undefined));
    console.log("List", list);
  }, [dispatch]);

  return (
    <Frame
      title='Templates'
      primaryAction={
        <Button
          type='primary'
          size="large"
          onClick={() => {
            history.push('/editor');
          }}
        >
          Add
        </Button>
      }
    >
      <>
        <Stack>
          {[ ...list].map((item) => (
            <CardItem data={item} key={item.article_id} />
          ))}
        </Stack>
      </>
    </Frame>
  );
}
