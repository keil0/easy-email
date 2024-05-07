import { BasicType, AdvancedType } from 'easy-email-core';
import { get } from 'lodash';

enum InnoceanBlocksType {
  TOP = 'TOP',
  RESPONSIVE_IMAGE = 'RESPONSIVE_IMAGE',
  BUTTON = 'BUTTON',
  TEXT_BLOCK = 'TEXT_BLOCK',
  TITLE_IMAGE_BLOCK = 'TITLE_IMAGE_BLOCK',
  TWO_COLUMNS = 'TWO_COLUMNS',
  THREE_COLUMNS = 'THREE_COLUMNS',
  FOUR_COLUMNS = 'FOUR_COLUMNS',
  HERO = 'HERO',
  SLICE_BACKGROUND_IMAGE_CTA = 'SLICE_BACKGROUND_IMAGE_CTA',
  SLICE_BACKGROUND_CTA_IMAGE = 'SLICE_BACKGROUND_CTA_IMAGE',
  SLICE_IMAGE_CTA = 'SLICE_IMAGE_CTA',
  SLICE_CTA_IMAGE = 'SLICE_CTA_IMAGE',
  SIDE_IMAGE = 'SIDE_IMAGE',
  FOOTER = 'FOOTER',
  POLLUSCORE = 'POLLUSCORE',
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

  [InnoceanBlocksType.RESPONSIVE_IMAGE]: '',
  [InnoceanBlocksType.BUTTON]: '',
  [InnoceanBlocksType.TOP]: '',
  [InnoceanBlocksType.TEXT_BLOCK]: '',
  [InnoceanBlocksType.TITLE_IMAGE_BLOCK]: '',
  [InnoceanBlocksType.TWO_COLUMNS]: '',
  [InnoceanBlocksType.THREE_COLUMNS]: '',
  [InnoceanBlocksType.FOUR_COLUMNS]: '',
  [InnoceanBlocksType.HERO]: '',
  [InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA]: '',
  [InnoceanBlocksType.SLICE_BACKGROUND_CTA_IMAGE]: '',
  [InnoceanBlocksType.SLICE_CTA_IMAGE]: '',
  [InnoceanBlocksType.SLICE_IMAGE_CTA]: '',
  [InnoceanBlocksType.SIDE_IMAGE]: '',
  [InnoceanBlocksType.FOOTER]: '',
  [InnoceanBlocksType.POLLUSCORE]: ''
};

export function getIconNameByBlockType(type: string) {
  return get(iconsMap, type) || 'icon-number';
}
