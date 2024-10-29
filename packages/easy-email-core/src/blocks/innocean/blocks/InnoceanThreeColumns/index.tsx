import React from 'react';
import { AdvancedType, BasicType, createBlock, IBlockData, mergeBlock, t } from '@core';
import { InnoceanBlocksType } from '@core/constants';
import { BasicBlock } from '@core/components';
import { InnoceanResponsiveImage } from '@core/blocks/innocean/blocks/InnoceanResponsiveImage';

export const InnoceanThreeColumns = createBlock<IBlockData>({
  get name() {
    return t('3 Columns');
  },
  type: InnoceanBlocksType.THREE_COLUMNS,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.THREE_COLUMNS,
      data: { value: {} },
      attributes: {
        'background-color': '#FFFFFF',
        padding: "0px 25px 0px 25px"
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
            'padding': '20px 20px 20px 20px',
            align: 'center',
          },
          children: [],
        },
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
                padding: '0px 25px 0px 25px',
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
              data: { value: {} },
              attributes: {
                padding: '0px 25px 0px 25px',
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
              data: { value: {} },
              attributes: {
                padding: '0px 25px 0px 25px',
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
});
