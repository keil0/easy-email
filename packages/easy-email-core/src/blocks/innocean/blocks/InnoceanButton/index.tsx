import React from 'react';

import { AdvancedType, BasicType, createBlock, IBlockData, mergeBlock, t } from '@core';

import { InnoceanBlocksType } from '@core/constants';

import { BasicBlock } from '@core/components';

export const InnoceanButton = createBlock<IBlockData>({
  get name() {
    return t('Button');
  },
  type: InnoceanBlocksType.BUTTON,
  validParentType: [
    BasicType.PAGE,
    AdvancedType.WRAPPER,
    AdvancedType.COLUMN,
    AdvancedType.SECTION,
    InnoceanBlocksType.TEXT_BLOCK,
    InnoceanBlocksType.HERO,
    InnoceanBlocksType.TWO_COLUMNS,
    InnoceanBlocksType.THREE_COLUMNS,
    InnoceanBlocksType.FOUR_COLUMNS
  ],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.BUTTON,
      data: { value: {} },
      attributes: {
        padding: '0px 0px 0px 0px',
      },
      children: [
        {
          type: AdvancedType.BUTTON,
          data: {
            value: {
              content: 'Réserver un essai',
            },
          },
          attributes: {
            'background-color': '#002c5f',
            'font-family': 'Helvetica, Arial, sans-serif',
            align: 'left',
            color: '#FFFFFF',
            'font-size': '15px',
            'font-weight': 'normal',
            'border-radius': '0px',
            padding: '0px 0px 0px 0px',
            'inner-padding': '15px 38px 15px 38px',
            'line-height': '120%',
            target: '_blank',
            'vertical-align': 'middle',
            border: 'none',
            'text-align': 'center',
            href: '#',
          },
          children: [],
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  },
});