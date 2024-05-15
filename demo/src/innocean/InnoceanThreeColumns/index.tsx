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

export type IThreeColumns = IBlockData<
  {},
  {}
>;

export const InnoceanThreeColumns = createBlock<IThreeColumns>({
  get name() {
    return t('3 Columns');
  },
  type: InnoceanBlocksType.THREE_COLUMNS,
  create: (payload) => {
    const defaultData: IThreeColumns = {
      type: InnoceanBlocksType.THREE_COLUMNS,
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#FFFFFF',
        padding: '0 10px 25px 10px',
      },
      children: [
        {
          type: AdvancedType.SECTION,
          data: {
            value: {},
          },
          attributes: {
            padding: '0 10px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: {
                value: {},
              },
              attributes: {
                'padding': '0px 20px',
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
                    'padding': '20px 50px 20px 50px',
                    align: 'center',
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          type: AdvancedType.SECTION,
          data: {
            value: {},
          },
          attributes: {
            padding: '0 10px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: {
                value: {},
              },
              attributes: {
                'padding': '0px 20px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: 'Lorem ipsum dolor sit amet.',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0 20px 0px',
                    align: 'center',
                  },
                  children: [],
                },
              ],
            },
            {
              type: AdvancedType.COLUMN,
              data: {
                value: {},
              },
              attributes: {
                'padding': '0px 20px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: 'Lorem ipsum dolor sit amet.',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0 20px 0px',
                    align: 'center',
                  },
                  children: [],
                },
              ],
            },
            {
              type: AdvancedType.COLUMN,
              data: {
                value: {},
              },
              attributes: {
                'padding': '0px 20px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: 'Lorem ipsum dolor sit amet.',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0 20px 0px',
                    align: 'center',
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
  },
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
});

export { Panel } from './Panel';