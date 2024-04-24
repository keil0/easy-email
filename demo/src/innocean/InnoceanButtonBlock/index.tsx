import { AdvancedType, BasicType, components, IBlock, IBlockData } from 'easy-email-core';
import React from 'react';
import { merge } from 'lodash';

import { InnoceanBlocksType } from '../constants';

export type IInnoceanButton = IBlockData<
  {},
  {
    buttonLink: string
    buttonText: string
  }
>;

export const InnoceanButtonBlock: IBlock = {
  name: 'Button',
  type: InnoceanBlocksType.BUTTON,
  create(
    payload,
  ) {
    const defaultData: IInnoceanButton = {
      type: InnoceanBlocksType.BUTTON,
      data: {
        value: {
          buttonText: payload?.data?.value.buttonText,
          buttonLink: payload?.data?.value.buttonLink,
        },
      },
      attributes: {
        "border-radius": "0px",
        "font-size": "15px",
        align: "left",
        "inner-padding": "15px 38px",
        padding: "0px",
        "background-color": "#002c5f",
      },
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
      <components.Section padding='0px'>

      </components.Section>
    );
  },
};


export { Panel } from './Panel';