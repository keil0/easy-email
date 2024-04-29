import { AdvancedType, BasicType, components, IBlock, IBlockData } from 'easy-email-core';
import React from 'react';
import { merge } from 'lodash';

import { InnoceanBlocksType } from '../constants';

const { BasicBlock, Section, Image } = components;

export type ICustomResponsiveImage = IBlockData<
  {},
  {
    desktopImageUrl: string
    mobileImageUrl: string
  }
>;

export const InnoceanResponsiveImageBlock: IBlock = {
  name: 'ResponsiveImage',
  type: InnoceanBlocksType.RESPONSIVE_IMAGE,
  create(
    payload,
  ) {
    const defaultData: ICustomResponsiveImage = {
      type: InnoceanBlocksType.RESPONSIVE_IMAGE,
      data: {
        value: {
          desktopImageUrl: payload?.data?.value.desktopImageUrl || 'https://dummyimage.com/1200x688/004dff/fff.png&text=header-desktop',
          mobileImageUrl: payload?.data?.value.mobileImageUrl || 'https://dummyimage.com/375x430/ecb0a0/fff.png&text=header-mobile',
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [
    BasicType.PAGE,
    AdvancedType.WRAPPER,
    AdvancedType.COLUMN,
  ],
  render(params) {
    return (
      <BasicBlock
        params={{
          ...params,
          data: { ...params.data, attributes: { 'padding': '0px' } },
        }}
        tag="mj-section"
      >
        <Section padding={"0px"} css-class={'hide-on-desktop'}>
          <Image
            params={params}
            tag="mj-image"
            src={params.data.data.value.mobileImageUrl}
            padding="0px"
            alt="hyundai"
          />
        </Section>
        <Section padding={"0px"} css-class={'hide-on-mobile'}>
          <Image
            params={params}
            tag="mj-image"
            src={params.data.data.value.desktopImageUrl}
            width="600px"
            padding="0"
            alt="hyundai"
          />
        </Section>
      </BasicBlock>
    );
  },
};


export { Panel } from './Panel';