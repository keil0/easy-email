import { AdvancedType, BasicType, components, IBlockData, mergeBlock } from 'easy-email-core';
import React from 'react';

import { InnoceanBlocksType } from '../constants';

const { BasicBlock } = components;

export const InnoceanButton: IBlockData = {
  get name() {
    return t('Button');
  },
  type: InnoceanBlocksType.BUTTON,
  create: (payload) => {
    const defaultData: IBlockData = {
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
        padding: '0px',
        'inner-padding': '15px 38px',
        'line-height': '120%',
        target: '_blank',
        'vertical-align': 'middle',
        border: 'none',
        'text-align': 'center',
        href: '#',
      },
      children: [],
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER, AdvancedType.COLUMN, AdvancedType.SECTION],
  render(params) {
    return <BasicBlock params={params} />;
  },
};


export { Panel } from './Panel';