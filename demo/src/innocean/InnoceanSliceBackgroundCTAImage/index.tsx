import React from 'react';

import { AdvancedType, BasicType, components, createBlock, IBlockData, mergeBlock, t } from 'easy-email-core';

import { InnoceanBlocksType } from '../constants';

import { InnoceanResponsiveImage } from '@demo/innocean/InnoceanResponsiveImage';

const { BasicBlock } = components;

export const InnoceanSliceBackgroundCTAImage = createBlock<IBlockData>({
  get name() {
    return t('Slice Background CTA Image');
  },
  type: InnoceanBlocksType.SLICE_BACKGROUND_CTA_IMAGE,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.SLICE_BACKGROUND_CTA_IMAGE,
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
          ]
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  }
});

export { Panel } from './Panel';