import { AdvancedType, BasicType, components, IBlock, IBlockData } from 'easy-email-core';
import React from 'react';
import { merge } from 'lodash';

import { InnoceanBlocksType } from '../constants';

const { BasicBlock } = components;

export const InnoceanResponsiveImage: IBlock = {
  name: 'ResponsiveImage',
  type: InnoceanBlocksType.RESPONSIVE_IMAGE,
  create(
    payload,
  ) {
    const defaultData: IBlockData = {
      type: BasicType.HERO,
      data: { value: {} },
      attributes: {
        "padding": "0px 0px"
      },
      children: [
        {
          type: AdvancedType.IMAGE,
          data: {
            value: {},
          },
          attributes: {
            height: 'auto',
            padding: '0px 0px',
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
            height: 'auto',
            padding: '0px 0px',
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
    return merge(defaultData, payload);
  },
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
};
