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

export type ITitleImage = IBlockData<
  {},
  {}
>;

export const InnoceanTitleImageBlock = createBlock<ITitleImage>({
  get name() {
    return t('Title\nImage');
  },
  type: InnoceanBlocksType.TITLE_IMAGE_BLOCK,
  create: (payload) => {
    const defaultData: ITitleImage = {
      type: InnoceanBlocksType.TITLE_IMAGE_BLOCK,
      data: {
        value: {},
      },
      attributes: {
        'background-color': "#FFFFFF",
        padding: "25px 50px 25px 50px"
      },
      children: [
        {
          type: 'column',
          data: {
            value: {}
          },
          attributes: {},
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
                'font-family': "Helvetica, Arial, sans-serif",
                padding: '0px 0px 20px 0px',
              },
              children: [],
            },
            {
              type: InnoceanBlocksType.RESPONSIVE_IMAGE,
              data: {
                value: {
                  desktopImageUrl: payload?.data?.value.desktopImageUrl || 'https://dummyimage.com/1200x688/004dff/fff.png&text=header-desktop',
                  mobileImageUrl: payload?.data?.value.mobileImageUrl || 'https://dummyimage.com/375x430/ecb0a0/fff.png&text=header-mobile',
                },
              },
              attributes: {
                padding: '0px',
              },
              children: [],
            }
          ]
        }
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