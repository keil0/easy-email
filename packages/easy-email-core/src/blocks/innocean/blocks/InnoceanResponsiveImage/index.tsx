import React from 'react';

import { AdvancedType, BasicType, components, createBlock, IBlockData, mergeBlock, t } from '@core';

import { InnoceanBlocksType } from '@core/constants';

const { BasicBlock } = components;
export const InnoceanResponsiveImage = createBlock<IBlockData>({
  get name() {
    return t('Responsive Image');
  },
  type: InnoceanBlocksType.RESPONSIVE_IMAGE,
  validParentType: [
    BasicType.PAGE,
    AdvancedType.WRAPPER,
    AdvancedType.COLUMN,
    AdvancedType.SECTION,
    AdvancedType.HERO,
  ],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (
    payload,
  ) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.RESPONSIVE_IMAGE,
      data: { value: {} },
      attributes: {
        padding: '0px 0px 0px 0px',
      },
      children: [
        {
          type: AdvancedType.IMAGE,
          data: {
            value: {},
          },
          attributes: {
            height: 'auto',
            padding: '0px 0px 0px 0px',
            src: 'https://dummyimage.com/1200x688/004dff/fff.png&text=image-desktop',
            width: '600px',
            alt: 'Image desktop',
            'css-class': 'hide_on_mobile',
            style: {
              display: 'block',
              maxWidth: '100%',
            }
          },
          children: [],
        },
        {
          type: AdvancedType.IMAGE,
          data: {
            value: {},
          },
          attributes: {
            'fluid-on-mobile': true,
            height: 'auto',
            padding: '0px 0px 0px 0px',
            src: 'https://dummyimage.com/375x430/ecb0a0/fff.png&text=image-mobile',
            width: '600px',
            alt: 'Image mobile',
            'css-class': 'show_on_mobile',
            style: {
              display: 'none',
              maxWidth: '100%',
            }
          },
          children: [],
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  },
});

