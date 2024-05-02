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

const { BasicBlock } = components;

export type IFourColumns = IBlockData<
  {},
  {}
>;

export const InnoceanFourColumns = createBlock<IFourColumns>({
  get name() {
    return t('4 Columns');
  },
  type: InnoceanBlocksType.FOUR_COLUMNS,
  create: (payload) => {
    const defaultData: IFourColumns = {
      type: InnoceanBlocksType.FOUR_COLUMNS,
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#FFFFFF',
        padding: '0 10px 25px 0px',
      },
      children: [
        {
          type: 'section',
          data: {
            value: {},
          },
          attributes: {
            padding: '20px 10px 0',
          },
          children: [
            {
              type: 'column',
              data: {
                value: {},
              },
              attributes: {
                'padding': '0px 20px',
              },
              children: [
                {
                  type: InnoceanBlocksType.RESPONSIVE_IMAGE,
                  data: {
                    value: {
                      desktopImageUrl: payload?.data?.value.desktopImageUrl || 'https://dummyimage.com/1200x688/004dff/fff.png&text=1',
                      mobileImageUrl: payload?.data?.value.mobileImageUrl || 'https://dummyimage.com/375x430/ecb0a0/fff.png&text=1',
                    },
                  },
                  attributes: {
                    padding: '0px',
                  },
                  children: [],
                },
                {
                  type: 'text',
                  data: {
                    value: {
                      content: 'Article Title',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0px',
                    align: 'center',
                  },
                  children: [],
                },
              ],
            },
            {
              type: 'column',
              data: {
                value: {},
              },
              attributes: {
                'padding': '0px 20px',
              },
              children: [
                {
                  type: InnoceanBlocksType.RESPONSIVE_IMAGE,
                  data: {
                    value: {
                      desktopImageUrl: payload?.data?.value.desktopImageUrl || 'https://dummyimage.com/1200x688/004dff/fff.png&text=2',
                      mobileImageUrl: payload?.data?.value.mobileImageUrl || 'https://dummyimage.com/375x430/ecb0a0/fff.png&text=2',
                    },
                  },
                  attributes: {
                    padding: '0px',
                  },
                  children: [],
                },
                {
                  type: 'text',
                  data: {
                    value: {
                      content: 'Article Title',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0px',
                    align: 'center',
                  },
                  children: [],
                },
              ],
            },
            {
              type: 'column',
              data: {
                value: {},
              },
              attributes: {
                'padding': '0px 20px',
              },
              children: [
                {
                  type: InnoceanBlocksType.RESPONSIVE_IMAGE,
                  data: {
                    value: {
                      desktopImageUrl: payload?.data?.value.desktopImageUrl || 'https://dummyimage.com/1200x688/004dff/fff.png&text=3',
                      mobileImageUrl: payload?.data?.value.mobileImageUrl || 'https://dummyimage.com/375x430/ecb0a0/fff.png&text=3',
                    },
                  },
                  attributes: {
                    padding: '0px',
                  },
                  children: [],
                },
                {
                  type: 'text',
                  data: {
                    value: {
                      content: 'Article Title',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0px',
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
                {
                  type: InnoceanBlocksType.RESPONSIVE_IMAGE,
                  data: {
                    value: {
                      desktopImageUrl: payload?.data?.value.desktopImageUrl || 'https://dummyimage.com/1200x688/004dff/fff.png&text=4',
                      mobileImageUrl: payload?.data?.value.mobileImageUrl || 'https://dummyimage.com/375x430/ecb0a0/fff.png&text=4',
                    },
                  },
                  attributes: {
                    padding: '0px',
                  },
                  children: [],
                },
                {
                  type: 'text',
                  data: {
                    value: {
                      content: 'Article Title',
                    },
                  },
                  attributes: {
                    'font-size': '15px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '20px 0px',
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
  },
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
});

export { Panel } from './Panel';