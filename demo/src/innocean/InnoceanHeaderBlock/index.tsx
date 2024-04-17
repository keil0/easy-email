import { AdvancedType, BasicType, components, IBlock, IBlockData } from 'easy-email-core';
import { BasicBlock } from '@core/components/BasicBlock';
import React from 'react';
import { merge } from 'lodash';

import { InnoceanBlocksType } from '../constants';

export type ICustomHeader = IBlockData<
  {
    'background-color': string;
    'text-color': string;
  },
  {
    buttonText: string;
    imageUrl: string
  }
>;

export const InnoceanHeaderBlock: IBlock = {
  name: 'Header',
  type: InnoceanBlocksType.HEADER,
  create(
    payload,
  ) {
    const defaultData: ICustomHeader = {
      type: InnoceanBlocksType.HEADER,
      data: {
        value: {
          buttonText: 'Got it',
          imageUrl: 'https://assets.maocanhua.cn/10dada65-c4fb-4b1f-837e-59a1005bbea6-image.png',
        },
      },
      attributes: {
        'background-color': '#4A90E2',
        'text-color': '#ffffff',
      },
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [
    BasicType.PAGE,
    AdvancedType.WRAPPER,
    AdvancedType.COLUMN,
    AdvancedType.GROUP,
    AdvancedType.SECTION
  ],
  render(params) {
    return (
      <BasicBlock
        params={params}
        tag="mj-section"
      ></BasicBlock>
    );
  },
};


export { Panel } from './Panel';