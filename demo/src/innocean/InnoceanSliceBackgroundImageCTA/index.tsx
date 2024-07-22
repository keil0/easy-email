import {
  AdvancedType,
  BasicType,
  components,
  IBlockData,
  createBlock,
  t,
  mergeBlock,
} from 'easy-email-core';
import React from 'react';

import { InnoceanBlocksType } from '../constants';
import { InnoceanResponsiveImage } from '@demo/innocean/InnoceanResponsiveImage';

const { BasicBlock } = components;

export const InnoceanSliceBackgroundImageCTA = createBlock<IBlockData>({
  get name() {
    return t('Slice Background Image CTA');
  },
  type: InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA,
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA,
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#f6f3f2',
        padding: '0 20px 25px 20px',
      },
      children: [
        {
          type: AdvancedType.SECTION,
          data: {
            value: {},
          },
          attributes: {
            padding: '0 5px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: {
                value: {},
              },
              attributes: {
                'padding': '0 25px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
              ],
            },
            {
              type: AdvancedType.COLUMN,
              data: {
                value: {},
              },
              attributes: {
                padding: "15px 25px"
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
                    padding: "0 0 20px",
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
                },
              ],
            },
          ]
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
});

export { Panel } from './Panel';