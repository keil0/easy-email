import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager } from 'easy-email-extensions';

import { InnoceanBlocksType } from './constants';

import { InnoceanHeaderBlock, Panel as HeaderPanel } from './InnoceanHeaderBlock';
import { InnoceanButtonBlock, Panel as ButtonPanel } from './InnoceanButtonBlock';
import { InnoceanTopBlock, Panel as TopPanel } from './InnoceanTopBlock';

BlockManager.registerBlocks({
  [InnoceanBlocksType.HEADER]: InnoceanHeaderBlock,
  [InnoceanBlocksType.BUTTON]: InnoceanButtonBlock,
  [InnoceanBlocksType.TOP]: InnoceanTopBlock
});

BlockAttributeConfigurationManager.add({
  [InnoceanBlocksType.HEADER]: HeaderPanel,
  [InnoceanBlocksType.BUTTON]: ButtonPanel,
  [InnoceanBlocksType.TOP]: TopPanel
});
