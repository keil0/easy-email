import React from 'react';

import { AdvancedType, BasicType, components, createBlock, IBlockData, mergeBlock, t } from 'easy-email-core';

import { InnoceanBlocksType } from '../constants';

import { InnoceanResponsiveImage } from '@demo/innocean/InnoceanResponsiveImage';

const { BasicBlock } = components;

export const InnoceanTopBlock = createBlock<IBlockData>({
  get name() {
    return t('Top');
  },
  type: InnoceanBlocksType.TOP,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.TOP,
      data: { value: {} },
      attributes: {
        'background-color': '#F6F3F2',
        padding: '0px 0px 0px 0px',
      },
      children: [
        {
          type: AdvancedType.TEXT,
          data: {
            value: {
              content: `Un problème d'affichage ? <a href='#'>Cliquez ici</a>`,
            },
          },
          attributes: {
            align: 'center',
            'font-size': '10px',
            'font-family': 'Helvetica, Arial, sans-serif',
            padding: '5px 0px 5px 0px',
          },
          children: [],
        },
        InnoceanResponsiveImage.create({
          children: [
            {
              type: AdvancedType.IMAGE,
              data: {
                value: {},
              },
              attributes: {
                height: 'auto',
                padding: '0px 0px 0px 0px',
                src: import.meta.env.VITE_API_BASE_URL as string + '/uploads/default/top_logo.png',
                width: '600px',
                alt: 'Image desktop',
                'css-class': 'hide_on_mobile',
                style: {
                  display: 'block',
                  maxWidth: '100%',
                },
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
                padding: '0px 0px 0px 0px',
                src: import.meta.env.VITE_API_BASE_URL as string + '/uploads/default/top_logo_mobile.png',
                width: '600px',
                alt: 'Image mobile',
                'css-class': 'show_on_mobile',
                style: {
                  display: 'none',
                  maxWidth: '100%',
                },
              },
              children: [],
            },
          ],
        }),
      ],
    };
    return mergeBlock(defaultData, payload);
  },
});

export { Panel } from './Panel';