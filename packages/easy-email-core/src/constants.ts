export type BlockType = BasicType;

// 基础组件
export enum BasicType {
  PAGE = 'page',
  SECTION = 'section',
  COLUMN = 'column',
  GROUP = 'group',
  TEXT = 'text',
  IMAGE = 'image',
  DIVIDER = 'divider',
  SPACER = 'spacer',
  BUTTON = 'button',
  WRAPPER = 'wrapper',
  RAW = 'raw',
  ACCORDION = 'accordion',
  ACCORDION_ELEMENT = 'accordion-element',
  ACCORDION_TITLE = 'accordion-title',
  ACCORDION_TEXT = 'accordion-text',
  HERO = 'hero',
  CAROUSEL = 'carousel',
  NAVBAR = 'navbar',
  SOCIAL = 'social',
  // TODO
  TABLE = 'table',

  TEMPLATE = 'template',
}

// 高级组件
export enum AdvancedType {
  TEXT = 'advanced_text',
  IMAGE = 'advanced_image',
  DIVIDER = 'advanced_divider',
  SPACER = 'advanced_spacer',
  BUTTON = 'advanced_button',
  NAVBAR = 'advanced_navbar',
  SOCIAL = 'advanced_social',
  ACCORDION = 'advanced_accordion',
  CAROUSEL = 'advanced_carousel',

  WRAPPER = 'advanced_wrapper',
  SECTION = 'advanced_section',
  COLUMN = 'advanced_column',
  GROUP = 'advanced_group',
  HERO = 'advanced_hero',
}

export enum InnoceanBlocksType {
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

export const MERGE_TAG_CLASS_NAME = 'easy-email-merge-tag-container';
export const EMAIL_BLOCK_CLASS_NAME = 'email-block';
