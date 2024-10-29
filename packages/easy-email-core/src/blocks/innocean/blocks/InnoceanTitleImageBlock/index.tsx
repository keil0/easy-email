import React from 'react';
import { AdvancedType, BasicType, createBlock, IBlockData, mergeBlock, t } from '@core';
import { InnoceanBlocksType } from '@core/constants';
import { BasicBlock } from '@core/components';
import { InnoceanResponsiveImage } from '@core/blocks/innocean/blocks/InnoceanResponsiveImage';

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
