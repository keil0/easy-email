import React from 'react';
import { AttributesPanelWrapper, BackgroundColor, CollapseWrapper, Padding } from 'easy-email-extensions';
import { Collapse, Grid, Space } from '@arco-design/web-react';

export function Panel() {
  return (
    <AttributesPanelWrapper>
      <CollapseWrapper defaultActiveKey={['0']}>
        <Collapse.Item
          name='0'
          header={t('Setting')}
        >
          <Space direction='vertical'>
            <Grid.Row>
              <Grid.Col span={11}>
                <BackgroundColor />
              </Grid.Col>
            </Grid.Row>
            <Padding />
          </Space>
        </Collapse.Item>
      </CollapseWrapper>
    </AttributesPanelWrapper>
  );
}