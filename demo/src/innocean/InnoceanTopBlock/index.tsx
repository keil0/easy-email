import { AdvancedType, BasicType, components, IBlock, IBlockData } from 'easy-email-core';
import React from 'react';
import { merge } from 'lodash';

import { InnoceanBlocksType } from '../constants';

const { BasicBlock, Column, Text, Section, Image } = components;

export type ICustomTop = IBlockData<
  {},
  {
    link: string
    desktopImageUrl: string
    mobileImageUrl: string
  }
>;

export const InnoceanTopBlock: IBlock = {
  name: 'Top',
  type: InnoceanBlocksType.TOP,
  create(payload) {
    const defaultData: ICustomTop = {
      type: InnoceanBlocksType.TOP,
      data: {
        value: {
          link: payload?.data?.value.link,
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
        params={{
          ...params,
          data: { ...params.data, attributes: { 'background-color': '#F6F3F2', 'padding': '0px' } },
        }}
        tag="mj-section"
      >
        <Section padding={"0px"}>
          <Column>
            <Text font-size={"10px"} font-family={"Helvetica"} padding={"0px"} align={"center"}>{`Un problème d'affichage ? <a href='${params.data.data.value.link}'>Cliquez ici</a>`}</Text>
          </Column>
        </Section>
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

export {
  Panel,
} from './Panel';