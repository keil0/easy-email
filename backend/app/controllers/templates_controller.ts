import type { HttpContext } from '@adonisjs/core/http'

export default class TemplatesController {
  async getMyTemplates({ response }: HttpContext) {
    return response.send([
      {
        title: 'Welcome to Easy-email',
        subTitle: 'Nice to meet you!',
        content: {
          type: 'page',
          data: {
            value: {
              'breakpoint': '480px',
              'headAttributes': '',
              'font-size': '14px',
              'font-weight': '400',
              'line-height': '1.7',
              'headStyles': [],
              'fonts': ['Helvetica, Arial, Verdana, sans serif'],
              'responsive': true,
              'text-color': '#000000',
            },
          },
          attributes: {
            'background-color': '#efeeea',
            'width': '600px',
          },
          children: [
            {
              type: 'advanced_wrapper',
              data: {
                value: {},
              },
              attributes: {
                'padding': '20px 0px 0px 0px',
                'border': 'none',
                'direction': 'ltr',
                'text-align': 'center',
              },
              children: [
                {
                  type: 'advanced_text',
                  data: {
                    value: {
                      content:
                        'Make it easy for everyone to compose emails!<div>And it work in multiline</div>',
                    },
                  },
                  attributes: {
                    'padding': '0px 0px 0px 0px',
                    'align': 'left',
                    'font-family': 'Helvetica, Arial, Verdana, sans serif',
                    'color': '#000000',
                    'container-background-color': '#4a90e2',
                    'text-decoration': '',
                    'font-weight': '500',
                    'font-size': '20px',
                  },
                  children: [],
                },
              ],
            },
            {
              type: 'advanced_image',
              data: {
                value: {},
              },
              attributes: {
                align: 'center',
                height: 'auto',
                padding: '0px 0px 0px 0px',
                src: '',
              },
              children: [],
            },
          ],
        },
      },
    ])
  }

  async createMyTemplate({ response }: HttpContext) {
    return response.send({
      message: 'Template created successfully',
    })
  }

  async updateMyTemplate({ response }: HttpContext) {
    return response.send({
      message: 'Template saved successfully',
    })
  }

  async deleteMyTemplate({ response }: HttpContext) {
    return response.send({
      message: 'Template deleted successfully',
    })
  }
}
