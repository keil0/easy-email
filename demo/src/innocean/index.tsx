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
import { InnoceanThreeColumns, Panel as ThreeColumnsPanel } from './InnoceanThreeColumns';
import { InnoceanFourColumns, Panel as FourColumnsPanel } from './InnoceanFourColumns';
import { InnoceanHeroBlock, Panel as HeroPanel } from './InnoceanHeroBlock';
import { InnoceanSliceBackgroundImageCTA, Panel as SliceBackgroundImageCTAPanel } from './InnoceanSliceBackgroundImageCTA';
import { InnoceanSliceBackgroundCTAImage, Panel as SliceBackgroundCTAImagePanel } from './InnoceanSliceBackgroundCTAImage';
import { InnoceanSliceCTAImage, Panel as SliceCTAImagePanel } from './InnoceanSliceCTAImage';
import { InnoceanSliceImageCTA, Panel as SliceImageCTAPanel } from './InnoceanSliceImageCTA';
import { InnoceanSideImage, Panel as SideImagePanel } from './InnoceanSideImage';
import { InnoceanFooter, Panel as FooterPanel} from './InnoceanFooter';
import { InnoceanPolluscore, Panel as PolluscorePanel } from './InnoceanPolluscore';

BlockManager.registerBlocks({
  [InnoceanBlocksType.RESPONSIVE_IMAGE]: InnoceanResponsiveImage,
  [InnoceanBlocksType.BUTTON]: InnoceanButton,
  [InnoceanBlocksType.TOP]: InnoceanTopBlock,
  [InnoceanBlocksType.TEXT_BLOCK]: InnoceanTextBlock,
  [InnoceanBlocksType.TITLE_IMAGE_BLOCK]: InnoceanTitleImageBlock,
  [InnoceanBlocksType.TWO_COLUMNS]: InnoceanTwoColumns,
  [InnoceanBlocksType.THREE_COLUMNS]: InnoceanThreeColumns,
  [InnoceanBlocksType.FOUR_COLUMNS]: InnoceanFourColumns,
  [InnoceanBlocksType.HERO]: InnoceanHeroBlock,
  [InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA]: InnoceanSliceBackgroundImageCTA,
  [InnoceanBlocksType.SLICE_BACKGROUND_CTA_IMAGE]: InnoceanSliceBackgroundCTAImage,
  [InnoceanBlocksType.SLICE_CTA_IMAGE]: InnoceanSliceCTAImage,
  [InnoceanBlocksType.SLICE_IMAGE_CTA]: InnoceanSliceImageCTA,
  [InnoceanBlocksType.SIDE_IMAGE]: InnoceanSideImage,
  [InnoceanBlocksType.FOOTER]: InnoceanFooter,
  [InnoceanBlocksType.POLLUSCORE]: InnoceanPolluscore
});

BlockAttributeConfigurationManager.add({
  [InnoceanBlocksType.TOP]: TopPanel,
  [InnoceanBlocksType.RESPONSIVE_IMAGE]: ResponsiveImagePanel,
  [InnoceanBlocksType.BUTTON]: ButtonPanel,
  [InnoceanBlocksType.TEXT_BLOCK]: TextBlockPanel,
  [InnoceanBlocksType.TITLE_IMAGE_BLOCK]: TitleImagePanel,
  [InnoceanBlocksType.TWO_COLUMNS]: TwoColumnsPanel,
  [InnoceanBlocksType.THREE_COLUMNS]: ThreeColumnsPanel,
  [InnoceanBlocksType.FOUR_COLUMNS]: FourColumnsPanel,
  [InnoceanBlocksType.HERO]: HeroPanel,
  [InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA]: SliceBackgroundImageCTAPanel,
  [InnoceanBlocksType.SLICE_BACKGROUND_CTA_IMAGE]: SliceBackgroundCTAImagePanel,
  [InnoceanBlocksType.SLICE_CTA_IMAGE]: SliceCTAImagePanel,
  [InnoceanBlocksType.SLICE_IMAGE_CTA]: SliceImageCTAPanel,
  [InnoceanBlocksType.SIDE_IMAGE]: SideImagePanel,
  [InnoceanBlocksType.FOOTER]: FooterPanel,
  [InnoceanBlocksType.POLLUSCORE]: PolluscorePanel,
});
