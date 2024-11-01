import React from 'react';

import { AdvancedType, BasicType, createBlock, IBlockData, mergeBlock, t } from '@core';

import { InnoceanBlocksType } from '@core/constants';

import { BasicBlock } from '@core/components';

export const InnoceanFooter = createBlock<IBlockData>({
  get name() {
    return t('Footer');
  },
  type: InnoceanBlocksType.FOOTER,
  validParentType: [BasicType.PAGE, AdvancedType.WRAPPER],
  render(params) {
    return <BasicBlock params={params} tag="mj-hero" />;
  },
  create: (payload) => {
    const defaultData: IBlockData = {
      type: InnoceanBlocksType.FOOTER,
      data: { value: {} },
      attributes: {
        'background-color': '#FFFFFF',
        padding: '0px 50px 0px 50px',
      },
      children: [
        {
          type: AdvancedType.SECTION,
          data: { value: {} },
          attributes: {
            'background-color': '#FFFFFF',
            padding: '0px 0px 0px 0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '10px 0px 0px 0px',
              },
              children: [
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: payload?.data?.value.followText || 'Suivez-nous sur <a href="#">drivetobusiness.fr</a>',
                    },
                  },
                  attributes: {
                    'font-size': '12px',
                    'font-family': 'Helvetica, Arial, sans-serif',
                    padding: '10px 0px 10px 0px',
                    'vertical-align': 'bottom',
                  },
                  children: [],
                },
              ],
            },
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '10px 0px 0px 0px',
              },
              children: [
                {
                  type: AdvancedType.SOCIAL,
                  attributes: {
                    align: 'right',
                    color: '#333333',
                    mode: 'horizontal',
                    'font-size': '13px',
                    'font-weight': 'normal',
                    'border-radius': '3px',
                    padding: '0px 0px 0px 0px',
                    'icon-size': '20px',
                  },
                  data: {
                    value: {
                      elements: [
                        {
                          href: payload?.data?.value.linkedinLink || '#',
                          target: '_blank',
                          content: '',
                          // @ts-expect-error - image src
                          src: payload?.data?.value.linkedinPicto || import.meta.env.VITE_API_BASE_URL as string + '/uploads/default/icon_link.png',
                          attributes: {
                            'background-color': '#FFFFFF',
                          }
                        },
                        {
                          href: payload?.data?.value.facebookLink || '#',
                          target: '_blank',
                          content: '',
                          // @ts-expect-error - image src
                          src: payload?.data?.value.facebookPicto || import.meta.env.VITE_API_BASE_URL as string + '/uploads/default/icon_fb.png',
                          attributes: {
                            'background-color': '#FFFFFF',
                          }
                        },
                        {
                          href: payload?.data?.value.twitterLink || '#',
                          target: '_blank',
                          content: '',
                          // @ts-expect-error - image src
                          src: payload?.data?.value.twitterPicto || import.meta.env.VITE_API_BASE_URL as string + '/uploads/default/icon_tw.png',
                          attributes: {
                            'background-color': '#FFFFFF',
                          }
                        },
                        {
                          href: payload?.data?.value.instagramLink || '#',
                          target: '_blank',
                          content: '',
                          // @ts-expect-error - image src
                          src: payload?.data?.value.instagramPicto || import.meta.env.VITE_API_BASE_URL as string + '/uploads/default/icon_insta.png',
                          attributes: {
                            'background-color': '#FFFFFF',
                          }
                        },
                        {
                          href: payload?.data?.value.youtubeLink || '#',
                          target: '_blank',
                          content: '',
                          // @ts-expect-error - image src
                          src: payload?.data?.value.youtubePicto || import.meta.env.VITE_API_BASE_URL as string + '/uploads/default/icon_yt.png',
                          attributes: {
                            'background-color': '#FFFFFF',
                          }
                        },
                      ],
                    },
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          type: AdvancedType.SECTION,
          data: { value: {} },
          attributes: {
            padding: '0px 0px 0px 0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '10px 0px 10px 0px',
              },
              children: [
                {
                  type: AdvancedType.DIVIDER,
                  data: {
                    value: {},
                  },
                  attributes: {
                    padding: '0px 0px 0px 0px',
                    'border-color': '#E9E9E9',
                    'border-style': 'solid',
                    'border-width': '1px',
                    width: '100%',
                  },
                  children: [],
                }
              ]
            }
          ]
        },
        {
          type: AdvancedType.SECTION,
          data: { value: {} },
          attributes: {
            padding: '0px 0px 0px 0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '10px 0px 10px 0px',
              },
              children: [
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: payload?.data?.value.copywriteText || '<strong>Hyundai</strong><br /> ©' + new Date().getFullYear() + ' Hyundai Motor France.<br /> Tous droits réservés.'
                    },
                  },
                  attributes: {
                    'font-size': '10px',
                    padding: '0px 0px 0px 0px',
                    'border-color': '#E9E9E9',
                    'border-style': 'solid',
                    'border-width': '1px',
                    width: '100%',
                  },
                  children: [],
                }
              ]
            }
          ]
        },
        {
          type: AdvancedType.SECTION,
          data: { value: {} },
          attributes: {
            padding: '0px 0px 0px 0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '10px 0px 10px 0px',
              },
              children: [
                {
                  type: AdvancedType.DIVIDER,
                  data: {
                    value: {},
                  },
                  attributes: {
                    padding: '0px 0px 0px 0px',
                    'border-color': '#E9E9E9',
                    'border-style': 'solid',
                    'border-width': '1px',
                    width: '100%',
                  },
                  children: [],
                }
              ]
            }
          ]
        },
        {
          type: AdvancedType.SECTION,
          data: { value: {} },
          attributes: {
            padding: '0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: {
                value: {},
              },
              attributes: {
                padding: '10px 0px 10px 0px',
              },
              children: [
                {
                  type: AdvancedType.IMAGE,
                  data: {
                    value: {},
                  },
                  attributes: {
                    height: 'auto',
                    padding: '0px 0px 20px 0px',
                    // @ts-expect-error - image src
                    src: payload?.data?.value.batterieImageSrc || import.meta.env.VITE_API_BASE_URL as string + '/uploads/default/batterie.png',
                    width: '250px',
                    align: 'left',
                    alt: 'Batterie',
                  },
                  children: [],
                },
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: payload?.data?.value.mentionsText || 'Si vous ne souhaitez plus recevoir nos e-mails, <a href="#">cliquez-ici</a>.<br /><br />' +
                        '<strong>Consommations mixtes (WLTP) de la gamme KONA electric (kWh/100 km) : 14,3 - 14,7 Émissions CO2 (g/km) : 0</strong><br /> ' +
                        '<strong>Consommations mixtes (WLTP) de la gamme IONIQ 5 (kWh/100 km) : 16,7 - 19 Émissions CO2 (g/km) : 0</strong><br />' +
                        '<strong>Consommations mixtes (WLTP) de la gamme KONA electric (kWh/100 km) : 14,3 - 14,7 Émissions CO2 (g/km) : 0</strong><br /><br />' +
                        '(*) La garantie 5 ans kilométrage illimité de Hyundai s\'applique uniquement aux véhicules Hyundai vendus initialement ' +
                        'par un Distributeur Agréé officiel Hyundai à un client final, conformément aux termes et conditions du carnet de Garantie ' +
                        'Entretien & Assistance du véhicule. Détails sur hyundai.com/fr.<br /><br /> (**) Les batteries haute-tension de nos véhicules ' +
                        'électrifiés sont garanties 8 ans ou 160 000 km, premier terme échu. Voir détails sur hyundai.com/fr.'
                    },
                  },
                  attributes: {
                    'font-size': '10px',
                    padding: '0px 0px 0px 0px',
                  },
                  children: [],
                }
              ]
            }
          ]
        },
        {
          type: AdvancedType.SECTION,
          data: { value: {} },
          attributes: {
            padding: '0px 0px 0px 0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '10px 0px 10px 0px',
              },
              children: [
                {
                  type: AdvancedType.TEXT,
                  data: {
                    value: {
                      content: payload?.data?.value.responsablityText || '<strong>Au quotidien, prenez les transports en commun #SeDéplacerMoinsPolluer</strong>'
                    },
                  },
                  attributes: {
                    'font-size': '10px',
                    padding: '10px 0px 20px 0px',
                    align: 'center',
                  },
                  children: [],
                }
              ]
            }
          ]
        },
        {
          type: AdvancedType.SECTION,
          data: { value: {} },
          attributes: {
            padding: '15px 0px 15px 0px',
          },
          children: [
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '10px 10px 20px 10px',
              },
              children: [
                {
                  type: InnoceanBlocksType.POLLUSCORE,
                  data: {
                    value: {
                      line1: 'Titre de la ligne 1',
                      line2: 'titre de la ligne 2',
                      val: 0,
                      width: 200,
                      color: 'black',
                      alt: 'Polluscore',
                    },
                  },
                  attributes: {},
                  children: [],
                }
              ]
            },
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '10px 10px 20px 10px',
              },
              children: [
                {
                  type: InnoceanBlocksType.POLLUSCORE,
                  data: {
                    value: {
                      line1: 'Titre de la ligne 1',
                      line2: 'titre de la ligne 2',
                      val: 0,
                      width: 200,
                      color: 'black',
                      alt: 'Polluscore',
                    },
                  },
                  attributes: {},
                  children: [],
                }
              ]
            },
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '10px 10px 20px 10px',
              },
              children: [
                {
                  type: InnoceanBlocksType.POLLUSCORE,
                  data: {
                    value: {
                      line1: 'Titre de la ligne 1',
                      line2: 'titre de la ligne 2',
                      val: 0,
                      width: 200,
                      color: 'black',
                      alt: 'Polluscore',
                    },
                  },
                  attributes: {},
                  children: [],
                }
              ]
            },
            {
              type: AdvancedType.COLUMN,
              data: { value: {} },
              attributes: {
                padding: '0px 10px 20px 10px',
              },
              children: [
                {
                  type: InnoceanBlocksType.POLLUSCORE,
                  data: {
                    value: {
                      line1: 'Titre de la ligne 1',
                      line2: 'titre de la ligne 2',
                      val: 0,
                      width: 200,
                      color: 'black',
                      alt: 'Polluscore',
                    },
                  },
                  attributes: {},
                  children: [],
                }
              ]
            }
          ]
        },
      ],
    };
    return mergeBlock(defaultData, payload);
  }
});