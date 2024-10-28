import React from 'react';

import { AdvancedType, BasicType, components, createBlock, IBlockData, mergeBlock, t } from 'easy-email-core';

import { InnoceanBlocksType } from '../constants';

import { InnoceanResponsiveImage } from '@demo/innocean/InnoceanResponsiveImage';

const { BasicBlock } = components;

export const InnoceanFourColumns = createBlock<IBlockData>({
  get name() {
    return t('4 Columns');
  },
  type: InnoceanBlocksType.FOUR_COLUMNS,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.FOUR_COLUMNS,
      data: { value: {} },
      attributes: {
        'background-color': '#FFFFFF',
        padding: "0px 25px 0px 25px"
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
                'padding': '0px 25px 0px 25px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: 'Article Title',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0px 20px 0px',
                    align: 'center',
                  },
                  children: [],
                },
              ],
            },
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                'padding': '0px 25px 0px 25px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: 'Article Title',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0px 20px 0px',
                    align: 'center',
                  },
                  children: [],
                },
              ],
            },
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                'padding': '0px 25px 0px 25px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: 'Article Title',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0px 20px 0px',
                    align: 'center',
                  },
                  children: [],
                },
              ],
            },
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                'padding': '0px 25px 0px 25px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: 'Article Title',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '0px 0px 0px 0px',
                    align: 'center',
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

export { Panel } from './Panel';