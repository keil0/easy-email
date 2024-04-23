import { AdvancedType, BasicType, components, IBlock, IBlockData } from 'easy-email-core';
import React from 'react';
import { merge } from 'lodash';

import { InnoceanBlocksType } from '../constants';

export type ICustomHeader = IBlockData<
  {},
  {
    desktopImageUrl: string
    mobileImageUrl: string
  }
>;

export const InnoceanButtonBlock: IBlock = {
  name: 'Button',
  type: InnoceanBlocksType.BUTTON,
  create(
    payload,
  ) {
    const defaultData: ICustomHeader = {
      type: InnoceanBlocksType.BUTTON,
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
      <components.BasicBlock
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
      </components.BasicBlock>
    );
  },
};


export { Panel } from './Panel';