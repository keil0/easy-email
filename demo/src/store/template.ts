import createSliceState from './common/createSliceState';
import { BlockManager, BasicType, AdvancedType } from 'easy-email-core';
import { IEmailTemplate } from 'easy-email-editor';
import { templateService } from '@demo/services/template';
import { emailToImage } from '@demo/utils/emailToImage';

export default createSliceState({
  name: 'template',
  initialState: null as IEmailTemplate | null,
  reducers: {
    set: (state, action) => {
      return action.payload;
    },
  },
  effects: {
    reset: async state => {
      return null;
    },
    fetchById: async (state, { id }: { id: number; }) => {
      const data = await templateService.getTemplate(id);
      return data as IEmailTemplate;
    },
    fetchDefaultTemplate: async state => {
      return {
        subject: 'Email title',
        subTitle: 'Email subtitle',
        content: BlockManager.getBlockByType(BasicType.PAGE).create({
          children: [BlockManager.getBlockByType(AdvancedType.WRAPPER).create()],
        }),
      } as IEmailTemplate;
    },
    create: async (state, payload: IEmailTemplate) => {
      const previewUrl = await emailToImage(payload.content);
      const data = await templateService.createTemplate({
        previewUrl,
        subject: payload.subject,
        subTitle: payload.subTitle,
        content: JSON.stringify(payload.content),
      });
      return { ...data, ...payload };
    },
    updateById: async (state, payload: { id: number; template: IEmailTemplate; }) => {
      const previewUrl = await emailToImage(payload.template.content);
      const data = await templateService.updateTemplate(payload.id, {
        previewUrl,
        subject: payload.template.subject,
        subTitle: payload.template.subTitle,
        content: JSON.stringify(payload.template.content),
      });
      return { ...data, ...payload, content: JSON.parse(data.content) };
    },
  },
});
