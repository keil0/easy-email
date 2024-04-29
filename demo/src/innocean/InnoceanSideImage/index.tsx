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

export const InnoceanSideImage = createBlock<IBlockData>({
  get name() {
    return t('Side image');
  },
  type: InnoceanBlocksType.SIDE_IMAGE,
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.SIDE_IMAGE,
      data: {
        value: {},
      },
      attributes: {
        'background-color': '#FFFFFF',
        padding: '25px 50px 25px 50px',
      },
      children: [
        {
          type: BasicType.SECTION,
          data: {
            value: {},
          },
          attributes: {
            padding: '0px',
          },
          children: [
            {
              type: BasicType.COLUMN,
              data: {
                value: {},
              },
              attributes: {
                width: '33%',
                padding: '0px',
              },
              children: [
                {
                  type: InnoceanBlocksType.RESPONSIVE_IMAGE,
                  data: {
                    value: {
                      desktopImageUrl: payload?.data?.value.desktopImageUrl || 'https://dummyimage.com/600x1500/004dff/fff.png&text=image-desktop',
                      mobileImageUrl: payload?.data?.value.mobileImageUrl || 'https://dummyimage.com/450x450/ecb0a0/fff.png&text=image-mobile',
                    },
                  },
                  attributes: {
                    padding: '0px',
                  },
                  children: [],
                },
              ],
            },
            {
              type: BasicType.COLUMN,
              data: {
                value: {},
              },
              attributes: {
                width: '67%',
                'padding': '0px 20px',
              },
              children: [
                {
                  type: 'text',
                  data: {
                    value: {
                      content: 'Lorem ipsum dolor sit amet.',
                    },
                  },
                  attributes: {
                    'font-size': '20px',
                    'font-weight': 'bold',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '0px 0px 20px 0px',
                  },
                  children: [],
                },
                {
                  type: 'text',
                  data: {
                    value: {
                      content:
                        'A pellentesque sit amet porttitor eget dolor morbi non arcu. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Interdum velit euismod in pellentesque massa placerat duis ultricies. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Ornare arcu odio ut sem nulla pharetra. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Eget nullam non nisi est sit amet facilisis magna etiam.\n' +
                        '<br />' +
                        '<br />' +
                        'Commodo ullamcorper a lacus vestibulum sed arcu non. Vitae justo eget magna fermentum iaculis eu non diam phasellus.',
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
                  type: 'button',
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
                },
              ],
            },
          ],
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER, AdvancedType.COLUMN],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
});

export { Panel } from './Panel';