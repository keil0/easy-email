import { AdvancedType, BasicType, components, IBlock, IBlockData } from 'easy-email-core';
import React from 'react';
import { merge } from 'lodash';

import { InnoceanBlocksType } from '../constants';

const { BasicBlock, Section, Image } = components;

export type ICustomHeader = IBlockData<
  {},
  {
    desktopImageUrl: string
    mobileImageUrl: string
  }
>;

export const InnoceanHeaderBlock: IBlock = {
  name: 'Header',
  type: InnoceanBlocksType.HEADER,
  create(
    payload,
  ) {
    const defaultData: ICustomHeader = {
      type: InnoceanBlocksType.HEADER,
      data: {
        value: {
          desktopImageUrl: payload?.data?.value.desktopImageUrl,
          mobileImageUrl: payload?.data?.value.mobileImageUrl,
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
  ],
  render(params) {
    return (
      <BasicBlock
        params={params}
        tag="mj-section"
      >
        <Section padding={"0px"} css-class={'hide-on-desktop'}>
          <Image
            params={params}
            tag="mj-image"
            src={params.data.data.value.mobileImageUrl}
            padding="0"
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