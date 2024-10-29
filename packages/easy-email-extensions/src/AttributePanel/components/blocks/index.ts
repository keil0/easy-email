import { Page } from './Page';
import { Section } from './Section';
import { Column } from './Column';
import { Text } from './Text';
import { Image } from './Image';
import { Group } from './Group';
import { Button } from './Button';
import { Divider } from './Divider';
import { Wrapper } from './Wrapper';
import { Spacer } from './Spacer';

import { Raw } from './Raw';
import { Accordion } from './Accordion';
import { AccordionElement } from './AccordionElement';
import { AccordionTitle } from './AccordionTitle';
import { AccordionText } from './AccordionText';
import { Carousel } from './Carousel';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { Social } from './Social';
import { Table } from './Table';
import { AdvancedType, BasicType, InnoceanBlocksType } from 'easy-email-core';
import { PolluscorePanel } from '@extensions/AttributePanel/components/blocks/Polluscore';

export const blocks = {
  [BasicType.PAGE]: Page,
  [BasicType.SECTION]: Section,
  [BasicType.COLUMN]: Column,
  [BasicType.TEXT]: Text,
  [BasicType.IMAGE]: Image,
  [BasicType.GROUP]: Group,
  [BasicType.BUTTON]: Button,
  [BasicType.DIVIDER]: Divider,
  [BasicType.WRAPPER]: Wrapper,
  [BasicType.SPACER]: Spacer,
  [BasicType.RAW]: Raw,
  [BasicType.ACCORDION]: Accordion,
  [BasicType.ACCORDION_ELEMENT]: AccordionElement,
  [BasicType.ACCORDION_TITLE]: AccordionTitle,
  [BasicType.ACCORDION_TEXT]: AccordionText,
  [BasicType.CAROUSEL]: Carousel,
  [BasicType.HERO]: Hero,
  [BasicType.NAVBAR]: Navbar,
  [BasicType.SOCIAL]: Social,
  [BasicType.TABLE]: Table,

  [AdvancedType.TEXT]: Text,
  [AdvancedType.IMAGE]: Image,
  [AdvancedType.BUTTON]: Button,
  [AdvancedType.DIVIDER]: Divider,
  [AdvancedType.SPACER]: Spacer,
  [AdvancedType.ACCORDION]: Accordion,
  [AdvancedType.CAROUSEL]: Carousel,
  [AdvancedType.NAVBAR]: Navbar,
  [AdvancedType.SOCIAL]: Social,

  [AdvancedType.HERO]: Hero,
  [AdvancedType.WRAPPER]: Wrapper,
  [AdvancedType.SECTION]: Section,
  [AdvancedType.GROUP]: Group,
  [AdvancedType.COLUMN]: Column,

  [InnoceanBlocksType.TOP]: Hero,
  [InnoceanBlocksType.RESPONSIVE_IMAGE]: Hero,
  [InnoceanBlocksType.BUTTON]: Hero,
  [InnoceanBlocksType.TEXT_BLOCK]: Hero,
  [InnoceanBlocksType.TITLE_IMAGE_BLOCK]: Hero,
  [InnoceanBlocksType.TWO_COLUMNS]: Hero,
  [InnoceanBlocksType.THREE_COLUMNS]: Hero,
  [InnoceanBlocksType.FOUR_COLUMNS]: Hero,
  [InnoceanBlocksType.HERO]: Hero,
  [InnoceanBlocksType.SLICE_BACKGROUND_IMAGE_CTA]: Hero,
  [InnoceanBlocksType.SLICE_BACKGROUND_CTA_IMAGE]: Hero,
  [InnoceanBlocksType.SLICE_IMAGE_CTA]: Hero,
  [InnoceanBlocksType.SLICE_CTA_IMAGE]: Hero,
  [InnoceanBlocksType.SIDE_IMAGE]: Hero,
  [InnoceanBlocksType.FOOTER]: Hero,
  [InnoceanBlocksType.POLLUSCORE]: PolluscorePanel
};
