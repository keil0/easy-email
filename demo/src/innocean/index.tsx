import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager, BlockMarketManager, BlockMaskWrapper } from 'easy-email-extensions';
import React from 'react';

import { InnoceanBlocksType } from './constants';
import { InnoceanHeaderBlock, Panel } from './InnoceanHeaderBlock';

BlockManager.registerBlocks({ [InnoceanBlocksType.HEADER]: InnoceanHeaderBlock });

BlockAttributeConfigurationManager.add({
  [InnoceanBlocksType.HEADER]: Panel
});

BlockMarketManager.addCategories([
  {
    title: 'Innocean',
    name: 'Innocean',
    blocks: [
      {
        type: InnoceanBlocksType.HEADER,
        title: 'My first block',
        description: 'An custom block',
        component: () => (
          <BlockMaskWrapper
            type={InnoceanBlocksType.HEADER as any}
            payload={{
            }}
          >
            <div style={{ position: 'relative' }}>
              <img src={'https://assets.maocanhua.cn/5631c12e-5788-40fd-92fe-23930a5985d7-image.png'} style={{ maxWidth: '100%' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} />
            </div>
          </BlockMaskWrapper>
        ),
        thumbnail:
          'https://assets.maocanhua.cn/5631c12e-5788-40fd-92fe-23930a5985d7-image.png',
      },
    ],
  }
]);
