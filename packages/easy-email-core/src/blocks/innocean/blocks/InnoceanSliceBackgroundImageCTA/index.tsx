import React from 'react';
import { AdvancedType, BasicType, createBlock, IBlockData, mergeBlock, t } from '@core';
import { InnoceanBlocksType } from '@core/constants';
import { BasicBlock } from '@core/components';
import { InnoceanResponsiveImage } from '@core/blocks/innocean/blocks/InnoceanResponsiveImage';

export const InnoceanSliceBackgroundImageCTA = createBlock<IBlockData>({
  get name() {
    return t('Slice Background Image CTA');
  },
  type: InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA,
      data: { value: {} },
      attributes: {
        'background-color': '#f6f3f2',
        padding: '0px 0px 0px 0px',
      },
      children: [
        {
          type: AdvancedType.SECTION,
          data: { value: {} },
          attributes: {
            padding: '0px 0px 0px 0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '0px 0px 0px 0px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
              ],
            },
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '0px 50px 0px 50px',
              },
              children: [
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: 'Sed porttitor eget justo eu ornare. Etiam ut orci non eros vestibulum luctus. Proin mattis odio at dignissim condimentum. Pellentesque molestie velit dolor, vel dignissim augue posuere sit amet.',
                    },
                  },
                  attributes: {
                    padding: "20px 0px 20px 0px",
                    'font-size': '15px',
                    'font-family': 'Helvetica, Arial, sans-serif',
                  },
                  children: [],
                },
                {
                  type: AdvancedType.BUTTON,
                  data: {
                    value: {
                      content: 'Réserver un essai',
                    },
                  },
                  attributes: {
                    'background-color': '#002c5f',
                    'font-family': "Helvetica, Arial, sans-serif",
                    align: 'left',
                    color: '#FFFFFF',
                    'font-size': '15px',
                    'font-weight': 'normal',
                    'border-radius': '0px',
                    padding: '0px 0px 50px 0px',
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
            },
          ]
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  }
});
