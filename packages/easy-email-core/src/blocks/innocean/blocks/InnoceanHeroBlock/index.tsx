import React from 'react';

import { AdvancedType, BasicType, createBlock, IBlockData, mergeBlock, t } from '@core';

import { InnoceanBlocksType } from '@core/constants';

import { BasicBlock } from '@core/components';

import { InnoceanResponsiveImage } from '@core/blocks/innocean/blocks/InnoceanResponsiveImage';

export const InnoceanHeroBlock = createBlock<IBlockData>({
  get name() {
    return t('Hero');
  },
  type: InnoceanBlocksType.HERO,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER, AdvancedType.COLUMN],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.HERO,
      data: {  value: {} },
      attributes: {
        'background-color': '#f6f3f2',
        padding: '0px 50px 0px 50px',
      },
      children: [
        {
          type: AdvancedType.SECTION,
          data: {  value: {} },
          attributes: {
            padding: '15px 0px 0px 0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '0px 0px 0px 0px',
              },
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
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '0px 0px 15px 0px',
                  },
                  children: [],
                },
                InnoceanResponsiveImage.create({}),
              ],
            },
          ],
        },
        {
          type: AdvancedType.SECTION,
          data: {  value: {} },
          attributes: {
            padding: '15px 0px 15px 0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: {  value: {} },
              attributes: {
                padding: '0px 0px 0px 0px',
              },
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
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '0px 0px 15px 0px',
                  },
                  children: [],
                },
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content:
                        'Sed porttitor eget justo eu ornare. Etiam ut orci non eros vestibulum luctus. Proin mattis odio at dignissim condimentum. Pellentesque molestie velit dolor, vel dignissim augue posuere sit amet. Vestibulum id sem maximus, luctus ex non, fringilla nunc. Quisque facilisis est et odio aliquam volutpat.' +
                        '<br/>' +
                        '<br/>' +
                        'Etiam ut viverra urna. Fusce ornare ullamcorper erat, et volutpat est pretium quis. Pellentesque accumsan orci erat, sed tristique sem ornare eget. Vivamus at erat et orci cursus malesuada nec id nisl. Phasellus lobortis ut quam a mattis. Etiam accumsan vehicula leo.',
                    },
                  },
                  attributes: {
                    'font-size': '14px',
                    'font-weight': 'normal',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '0px 0px 20px 0px',
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
            },
          ],
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  }
});