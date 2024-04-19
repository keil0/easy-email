import { AdvancedType, BasicType, components, IBlock, IBlockData } from 'easy-email-core';
import React from 'react';
import { BasicBlock } from '@core/components/BasicBlock';
import { InnoceanBlocksType } from '../constants';
import { merge } from 'lodash';

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
        <components.Section css-class={'hide-on-desktop'}>
          <components.Image
            params={params}
            tag="mj-image"
            src={params.data.data.value.mobileImageUrl}
            padding="0"
            alt="hyundai"
            css-class={'keilo'}
          />
        </components.Section>
        <components.Section css-class={'hide-on-mobile'}>
          <components.Image
            params={params}
            tag="mj-image"
            src={params.data.data.value.desktopImageUrl}
            width="600px"
            padding="0"
            alt="hyundai"
          />
        </components.Section>
      </BasicBlock>
    );
  },
};


export { Panel } from './Panel';