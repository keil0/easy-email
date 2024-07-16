import React from 'react';
import { Layout, Menu, Breadcrumb } from '@arco-design/web-react';
import { Stack } from '../Stack';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface FrameProps {
  title: string;
  breadcrumb?: React.ReactElement;
  primaryAction?: React.ReactElement;
  children: React.ReactElement;
}

export default function Frame({
  children,
  title,
  primaryAction,
  breadcrumb,
}: FrameProps) {
  return (
    <Layout>
      <Header style={{ padding: '0 20px', backgroundColor: '#001529' }}>
        <Stack distribution='equalSpacing' alignment='center'>
          <h1 style={{ color: 'white', margin: '15px 0' }}>Innocean | Postcard</h1>
        </Stack>
      </Header>
      <Layout>
        <Layout style={{ padding: 24 }}>
          <Stack vertical>
            <Stack distribution='equalSpacing' alignment='center'>
              <Stack.Item>

              </Stack.Item>
              <Stack.Item>{primaryAction}</Stack.Item>
            </Stack>

            <Stack.Item>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  backgroundColor: '#fff',
                }}
              >
                {children}
              </Content>
            </Stack.Item>
          </Stack>
        </Layout>
      </Layout>
    </Layout>
  );
}
