import createSliceState from './common/createSliceState';
import { ITemplate, templateService } from '@demo/services/template';

export default createSliceState({
  name: 'templates',
  initialState: [] as ITemplate[],
  reducers: {
    set: (state, action) => state,
  },
  effects: {
    fetch: async () => {
      const list = await templateService.getTemplates();
      list.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));
      return list;
    },
    deleteById: async (state, { id }) => {
      try {
        await templateService.deleteTemplate(id);
        return state.filter((item) => item.id !== id)
      } catch (error) {
        console.error(error);
      }
      return state
    },
  },
});
