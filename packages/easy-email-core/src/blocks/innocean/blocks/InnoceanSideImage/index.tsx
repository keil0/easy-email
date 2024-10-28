import React from 'react';
import { AdvancedType, BasicType, createBlock, IBlockData, mergeBlock, t } from '@core';
import { InnoceanBlocksType } from '@core/constants';
import { BasicBlock } from '@core/components';
import { InnoceanResponsiveImage } from '@core/blocks/innocean/blocks/InnoceanResponsiveImage';

export const InnoceanSideImage = createBlock<IBlockData>({
  get name() {
    return t('Side image');
  },
  type: InnoceanBlocksType.SIDE_IMAGE,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER, AdvancedType.COLUMN],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.SIDE_IMAGE,
      data: { value: {} },
      attributes: {
        'background-color': '#FFFFFF',
        padding: '0px 0px 0px 0px',
      },
      children: [
        {
          type: BasicType.SECTION,
          data: { value: {} },
          attributes: {
            padding: '0px 0px 0px 0px',
          },
          children: [
            {
              type: BasicType.COLUMN,
              data: { value: {} },
              attributes: {
                width: '33%',
                padding: '50px 0px 0px 50px',
              },
              children: [
                InnoceanResponsiveImage.create({}),
              ],
            },
            {
              type: BasicType.COLUMN,
              data: { value: {} },
              attributes: {
                width: '67%',
                padding: '50px 50px 0px 50px',
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
                    padding: '0px 0px 0px 0px',
                  },
                  children: [],
                },
                {
                  type: AdvancedType.TEXT,
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
                    padding: '0px 0px 25px 0px',
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
  },

});
