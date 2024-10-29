import { AdvancedType, BasicType } from 'easy-email-core';
import { get } from 'lodash';

enum InnoceanBlocksType {
  TOP = 'INNOCEAN_TOP',
  RESPONSIVE_IMAGE = 'INNOCEAN_RESPONSIVE_IMAGE',
  BUTTON = 'INNOCEAN_BUTTON',
  TEXT_BLOCK = 'INNOCEAN_TEXT_BLOCK',
  TITLE_IMAGE_BLOCK = 'INNOCEAN_TITLE_IMAGE_BLOCK',
  TWO_COLUMNS = 'INNOCEAN_TWO_COLUMNS',
  THREE_COLUMNS = 'INNOCEAN_THREE_COLUMNS',
  FOUR_COLUMNS = 'INNOCEAN_FOUR_COLUMNS',
  HERO = 'INNOCEAN_HERO',
  SLICE_BACKGROUND_IMAGE_CTA = 'INNOCEAN_SLICE_BACKGROUND_IMAGE_CTA',
  SLICE_BACKGROUND_CTA_IMAGE = 'INNOCEAN_SLICE_BACKGROUND_CTA_IMAGE',
  SLICE_IMAGE_CTA = 'INNOCEAN_SLICE_IMAGE_CTA',
  SLICE_CTA_IMAGE = 'INNOCEAN_SLICE_CTA_IMAGE',
  SIDE_IMAGE = 'INNOCEAN_SIDE_IMAGE',
  FOOTER = 'INNOCEAN_FOOTER',
  POLLUSCORE = 'INNOCEAN_POLLUSCORE',
}

const iconsMap = {
  [BasicType.TEXT]: 'icon-text',
  [BasicType.SECTION]: 'icon-section',
  [BasicType.COLUMN]: 'icon-column',
  [BasicType.DIVIDER]: 'icon-divider',
  [BasicType.IMAGE]: 'icon-img',
  [BasicType.BUTTON]: 'icon-button',
  [BasicType.GROUP]: 'icon-group',
  [BasicType.PAGE]: 'icon-page',
  [BasicType.WRAPPER]: 'icon-wrapper',
  [BasicType.NAVBAR]: 'icon-navbar',
  [BasicType.HERO]: 'icon-hero',
  [BasicType.SPACER]: 'icon-spacing',
  [BasicType.SOCIAL]: 'icon-social',
  [BasicType.CAROUSEL]: 'icon-carousel',
  [BasicType.ACCORDION]: 'icon-accordion',

  [AdvancedType.TEXT]: 'icon-text',
  [AdvancedType.DIVIDER]: 'icon-divider',
  [AdvancedType.IMAGE]: 'icon-img',
  [AdvancedType.BUTTON]: 'icon-button',
  [AdvancedType.NAVBAR]: 'icon-navbar',
  [AdvancedType.SPACER]: 'icon-spacing',
  [AdvancedType.SOCIAL]: 'icon-social',
  [AdvancedType.CAROUSEL]: 'icon-carousel',
  [AdvancedType.ACCORDION]: 'icon-accordion',

  [AdvancedType.WRAPPER]: 'icon-wrapper',
  [AdvancedType.SECTION]: 'icon-section',
  [AdvancedType.COLUMN]: 'icon-column',
  [AdvancedType.GROUP]: 'icon-group',
  [AdvancedType.HERO]: 'icon-hero',

  [InnoceanBlocksType.RESPONSIVE_IMAGE]: 'icomoon-image',
  [InnoceanBlocksType.BUTTON]: 'icomoon-button',
  [InnoceanBlocksType.TOP]: 'icomoon-top',
  [InnoceanBlocksType.TEXT_BLOCK]: 'icomoon-block_text',
  [InnoceanBlocksType.TITLE_IMAGE_BLOCK]: 'icomoon-title_image',
  [InnoceanBlocksType.TWO_COLUMNS]: 'icomoon-columns',
  [InnoceanBlocksType.THREE_COLUMNS]: 'icomoon-columns1',
  [InnoceanBlocksType.FOUR_COLUMNS]: 'icomoon-columns2',
  [InnoceanBlocksType.HERO]: 'icomoon-hero',
  [InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA]: 'icomoon-imagetexte4',
  [InnoceanBlocksType.SLICE_BACKGROUND_CTA_IMAGE]: 'icomoon-imagetexte3',
  [InnoceanBlocksType.SLICE_CTA_IMAGE]: 'icomoon-imagetexte2',
  [InnoceanBlocksType.SLICE_IMAGE_CTA]: 'icomoon-imagetexte1',
  [InnoceanBlocksType.SIDE_IMAGE]: 'icomoon-imagetexte5',
  [InnoceanBlocksType.FOOTER]: 'icomoon-footer',
  [InnoceanBlocksType.POLLUSCORE]: 'icomoon-polluscore'
};

export function getIconNameByBlockType(type: string) {
  return get(iconsMap, type) || 'icon-number';
}
