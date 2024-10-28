import React from 'react';

import { AdvancedType, BasicType, components, createBlock, IBlockData, mergeBlock, t } from 'easy-email-core';

import { InnoceanBlocksType } from '../constants';

import { InnoceanResponsiveImage } from '@demo/innocean/InnoceanResponsiveImage';

const { BasicBlock } = components;

export const InnoceanTitleImageBlock = createBlock<IBlockData>({
  get name() {
    return t('Title Image');
  },
  type: InnoceanBlocksType.TITLE_IMAGE_BLOCK,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.TITLE_IMAGE_BLOCK,
      data: { value: {} },
      attributes: {
        padding: "25px 50px 25px 50px"
      },
      children: [
        {
          type: AdvancedType.COLUMN,
          data: {
            value: {}
          },
          attributes: {},
          children: [
            {
              type: AdvancedType.TEXT,
              data: {
                value: {
                  content: 'Lorem ipsum dolor sit amet.',
                },
              },
              attributes: {
                'font-size': '20px',
                'font-weight': 'bold',
                'font-family': "Helvetica, Arial, sans-serif",
                padding: '0px 0px 20px 0px',
              },
              children: [],
            },
            InnoceanResponsiveImage.create({}),
          ]
        }
      ],
    };
    return mergeBlock(defaultData, payload);
  },
});

export { Panel } from './Panel';