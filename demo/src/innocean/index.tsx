import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager } from 'easy-email-extensions';

import { InnoceanBlocksType } from './constants';

import {
  InnoceanResponsiveImage,
  Panel as ResponsiveImagePanel,
} from './InnoceanResponsiveImage';
import { InnoceanButton, Panel as ButtonPanel } from './InnoceanButton';
import { InnoceanTopBlock, Panel as TopPanel } from './InnoceanTopBlock';
import { InnoceanTextBlock, Panel as TextBlockPanel } from './InnoceanTextBlock';
import { InnoceanTitleImageBlock, Panel as TitleImagePanel } from './InnoceanTitleImageBlock';
import { InnoceanTwoColumns, Panel as TwoColumnsPanel } from './InnoceanTwoColumns';

BlockManager.registerBlocks({
  [InnoceanBlocksType.RESPONSIVE_IMAGE]: InnoceanResponsiveImage,
  [InnoceanBlocksType.BUTTON]: InnoceanButton,
  [InnoceanBlocksType.TOP]: InnoceanTopBlock,
  [InnoceanBlocksType.TEXT_BLOCK]: InnoceanTextBlock,
  [InnoceanBlocksType.TITLE_IMAGE_BLOCK]: InnoceanTitleImageBlock,
  [InnoceanBlocksType.TWO_COLUMNS]: InnoceanTwoColumns,
});

BlockAttributeConfigurationManager.add({
  [InnoceanBlocksType.TOP]: TopPanel,
  [InnoceanBlocksType.RESPONSIVE_IMAGE]: ResponsiveImagePanel,
  [InnoceanBlocksType.BUTTON]: ButtonPanel,
  [InnoceanBlocksType.TEXT_BLOCK]: TextBlockPanel,
  [InnoceanBlocksType.TITLE_IMAGE_BLOCK]: TitleImagePanel,
  [InnoceanBlocksType.TWO_COLUMNS]: TwoColumnsPanel,
});
