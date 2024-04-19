import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager } from 'easy-email-extensions';


import { InnoceanBlocksType } from './constants';
import { InnoceanHeaderBlock, Panel } from './InnoceanHeaderBlock';

BlockManager.registerBlocks({
  [InnoceanBlocksType.HEADER]: InnoceanHeaderBlock
});

BlockAttributeConfigurationManager.add({
  [InnoceanBlocksType.HEADER]: Panel
});
