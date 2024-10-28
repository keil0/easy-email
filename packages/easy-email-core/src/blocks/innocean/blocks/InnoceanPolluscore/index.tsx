import React from 'react';

import { AdvancedType, createBlock, IBlockData, mergeBlock, t } from '@core';

import { InnoceanBlocksType } from '@core/constants';

import { BasicBlock, Image } from '@core/components';

export type IInnoceanPolluscore = IBlockData<
  {},
  {
    line1: string;
    line2: string;
    val: number;
    width: number;
    color: string;
    alt: string;
  }
>;

export const InnoceanPolluscore = createBlock<IInnoceanPolluscore>({
  get name() {
    return t('Polluscore');
  },
  type: InnoceanBlocksType.POLLUSCORE,
  create: (payload) => {
    const defaultData: IInnoceanPolluscore = {
      type: InnoceanBlocksType.POLLUSCORE,
      data: {
        value: {
          line1: payload?.data?.value?.line1 || 'Titre de la ligne 1',
          line2: payload?.data?.value?.line2 || 'titre de la ligne 2',
          val: payload?.data?.value?.val || 0,
          width: payload?.data?.value?.width || 200,
          color: payload?.data?.value?.color || 'black',
          alt: payload?.data?.value?.alt || 'Polluscore',
        },
      },
      attributes: {},
      children: [],
    };
    return mergeBlock(defaultData, payload);
  },
  validParentType: [AdvancedType.COLUMN],
  render(params) {
    const polluscoreUrl = `https://cdn.hyundai.media/polluscore/png/?val=${params.data.data.value.val}&ligne1=${params.data.data.value.line1}&ligne2=${params.data.data.value.line2}&width=${params.data.data.value.width}&color=${params.data.data.value.color}`;
    return (
      <BasicBlock
        params={{
          ...params,
          data: { ...params.data, attributes: { 'padding': '0px' } },
        }}
        tag="mj-section"
      >
        <Image
          src={polluscoreUrl}
          padding="0px"
          alt={params.data.data.value.alt}
        />
      </BasicBlock>
    );
  },
});

