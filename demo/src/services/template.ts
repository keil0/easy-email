import { request } from './axios.config';
import { IPage } from 'easy-email-core';

export const templateService = {
  async getTemplate(id: number): Promise<ITemplate> {
    return request.get<ITemplate>(`/templates/${id}`);
  },
  async getTemplates(): Promise<ITemplate[]> {
    return request.get<ITemplate[]>('/templates');
  },
  async createTemplate(data: any): Promise<ITemplate> {
    return request.post<ITemplate>('/templates', data);
  },
  async updateTemplate(id: number, data: any): Promise<ITemplate> {
    return request.patch<ITemplate>(`/templates/${id}`, data);
  },
  async deleteTemplate(id: number): Promise<void> {
    await request.delete(`/templates/${id}`);
  },
};

export interface ITemplate {
  id: number;
  previewUrl: string;
  subject: string;
  subTitle: string;
  updatedAt: number;
  createdAt: number;
  content: IPage;
}
