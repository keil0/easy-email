import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager } from 'easy-email-extensions';


import { InnoceanBlocksType } from './constants';
import { InnoceanHeaderBlock, Panel as HeaderPanel } from './InnoceanHeaderBlock';
import { InnoceanButtonBlock, Panel as ButtonPanel } from './InnoceanButtonBlock';

BlockManager.registerBlocks({
  [InnoceanBlocksType.HEADER]: InnoceanHeaderBlock,
  [InnoceanBlocksType.BUTTON]: InnoceanButtonBlock
});

BlockAttributeConfigurationManager.add({
  [InnoceanBlocksType.HEADER]: HeaderPanel,
  [InnoceanBlocksType.BUTTON]: ButtonPanel
});
