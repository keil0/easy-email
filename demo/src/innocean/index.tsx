import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager } from 'easy-email-extensions';

import { InnoceanBlocksType } from './constants';

import {
  InnoceanResponsiveImageBlock,
  Panel as ResponsiveImagePanel,
} from './InnoceanResponsiveImageBlock';
import { InnoceanButtonBlock, Panel as ButtonPanel } from './InnoceanButtonBlock';
import { InnoceanTopBlock, Panel as TopPanel } from './InnoceanTopBlock';
import { InnoceanTextBlock, Panel as TextBlockPanel } from './InnoceanTextBlock';

BlockManager.registerBlocks({
  [InnoceanBlocksType.RESPONSIVE_IMAGE]: InnoceanResponsiveImageBlock,
  [InnoceanBlocksType.BUTTON]: InnoceanButtonBlock,
  [InnoceanBlocksType.TOP]: InnoceanTopBlock,
  [InnoceanBlocksType.TEXT_BLOCK]: InnoceanTextBlock
});

BlockAttributeConfigurationManager.add({
  [InnoceanBlocksType.TOP]: TopPanel,
  [InnoceanBlocksType.RESPONSIVE_IMAGE]: ResponsiveImagePanel,
  [InnoceanBlocksType.BUTTON]: ButtonPanel,
  [InnoceanBlocksType.TEXT_BLOCK]: TextBlockPanel
});
