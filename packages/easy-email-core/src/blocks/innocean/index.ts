import { InnoceanTopBlock } from './blocks/InnoceanTopBlock';
import { InnoceanResponsiveImage } from './blocks/InnoceanResponsiveImage';
import { InnoceanButton } from './blocks/InnoceanButton';
import { InnoceanTextBlock } from './blocks/InnoceanTextBlock';
import { InnoceanTitleImageBlock } from './blocks/InnoceanTitleImageBlock';
import { InnoceanTwoColumns } from './blocks/InnoceanTwoColumns';
import { InnoceanThreeColumns } from './blocks/InnoceanThreeColumns';
import { InnoceanFourColumns } from './blocks/InnoceanFourColumns';
import { InnoceanHeroBlock } from './blocks/InnoceanHeroBlock';
import { InnoceanSliceBackgroundImageCTA } from './blocks/InnoceanSliceBackgroundImageCTA';
import { InnoceanSliceBackgroundCTAImage } from './blocks/InnoceanSliceBackgroundCTAImage';
import { InnoceanSliceImageCTA } from './blocks/InnoceanSliceImageCTA';
import { InnoceanSliceCTAImage } from './blocks/InnoceanSliceCTAImage';
import { InnoceanSideImage } from './blocks/InnoceanSideImage';
import { InnoceanFooter } from './blocks/InnoceanFooter';
import { InnoceanPolluscore } from './blocks/InnoceanPolluscore';

import { InnoceanBlocksType } from '@core/constants';

export const innoceanBlocks = {
  [InnoceanBlocksType.TOP]: InnoceanTopBlock,
  [InnoceanBlocksType.RESPONSIVE_IMAGE]: InnoceanResponsiveImage,
  [InnoceanBlocksType.BUTTON]: InnoceanButton,
  [InnoceanBlocksType.TEXT_BLOCK]: InnoceanTextBlock,
  [InnoceanBlocksType.TITLE_IMAGE_BLOCK]: InnoceanTitleImageBlock,
  [InnoceanBlocksType.TWO_COLUMNS]: InnoceanTwoColumns,
  [InnoceanBlocksType.THREE_COLUMNS]: InnoceanThreeColumns,
  [InnoceanBlocksType.FOUR_COLUMNS]: InnoceanFourColumns,
  [InnoceanBlocksType.HERO]: InnoceanHeroBlock,
  [InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA]: InnoceanSliceBackgroundImageCTA,
  [InnoceanBlocksType.SLICE_BACKGROUND_CTA_IMAGE]: InnoceanSliceBackgroundCTAImage,
  [InnoceanBlocksType.SLICE_IMAGE_CTA]: InnoceanSliceImageCTA,
  [InnoceanBlocksType.SLICE_CTA_IMAGE]: InnoceanSliceCTAImage,
  [InnoceanBlocksType.SIDE_IMAGE]: InnoceanSideImage,
  [InnoceanBlocksType.FOOTER]: InnoceanFooter,
  [InnoceanBlocksType.POLLUSCORE]: InnoceanPolluscore,
};

export * from './blocks/InnoceanPolluscore/Panel'