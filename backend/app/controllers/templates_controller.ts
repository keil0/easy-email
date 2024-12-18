import type { HttpContext } from '@adonisjs/core/http'
import { templateValidator } from '#validators/template'
import Template from '#models/template'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import Image from '#models/image'
import env from '#start/env'
import drive from '@adonisjs/drive/services/main'

export default class TemplatesController {
  async getMyTemplates({ response, auth }: HttpContext) {
    const templates = await Template.findManyBy({ userId: auth.user!.id })
    return response.send(templates)
  }

  async getMyTemplate({ request, response, auth }: HttpContext) {
    const template = await Template.findBy({ userId: auth.user!.id, id: request.param('id') })
    return response.send(template)
  }

  async createMyTemplate({ request, response, auth }: HttpContext) {
    const payload = await templateValidator.validate(request.all())
    const template = await Template.create({
      previewUrl: payload.previewUrl,
      subject: payload.subject,
      subTitle: payload.subTitle,
      content: payload.content,
    })
    await template.related('user').associate(auth.user!)

    return response.send(template)
  }

  async updateMyTemplate({ request, response, auth }: HttpContext) {
    const templateId = request.param('id')
    if (!templateId) {
      return response.status(400).send({
        message: 'Template ID is required',
      })
    }
    const template = await Template.findBy({ userId: auth.user!.id, id: templateId })
    if (!template) {
      return response.status(404).send({
        message: 'Template not found',
      })
    }
    const payload = await templateValidator.validate(request.all())

    await template
      .merge({
        previewUrl: payload.previewUrl,
        subject: payload.subject,
        subTitle: payload.subTitle,
        content: payload.content,
      })
      .save()

    return response.send(template)
  }

  async deleteMyTemplate({ request, response, auth }: HttpContext) {
    const templateId = request.param('id')
    if (!templateId) {
      return response.status(400).send({
        message: 'Template ID is required',
      })
    }
    const template = await Template.findBy({ userId: auth.user!.id, id: templateId })
    if (!template) {
      return response.status(404).send({
        message: 'Template not found',
      })
    }

    const dbTemplate = await Template.findOrFail(templateId)
    await dbTemplate.delete()

    return response.send({
      message: 'Template deleted successfully',
    })
  }

  async uploadTemplateImage({ request, response, auth }: HttpContext) {
    // Get the image
    const image = request.file('image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })

    if (!image) {
      return response.status(400).send({
        message: 'Image is required',
      })
    }

    // Generate image unique name
    const imageName = `${cuid()}.${image.extname}`
    const imagePath = app.makePath(`public/uploads/${auth.user!.id}`)

    await image.move(imagePath, {
      name: imageName,
    })

    const absolutePublicUrl =
      env.get('BASE_DOMAIN') +
      `${env.get('NODE_ENV') === 'development' ? '' : '/auth'}` +
      `/uploads/${auth.user!.id}/` +
      imageName

    // Save image
    const imageDb = await Image.create({
      url: absolutePublicUrl,
    })

    // Link image to template
    await imageDb.related('user').associate(auth.user!)

    return response.send(absolutePublicUrl)
  }

  async uploadMultipleImages({ request, response, auth }: HttpContext) {
    const images = request.files('images', {
      size: '5mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })

    if (images.length === 0) {
      return response.status(400).send({
        message: 'No images uploaded.',
      })
    }

    const uploadedUrls = []
    for (const image of images) {
      const originalName = this.sanitizeFileName(image.clientName)

      const imagePath = app.makePath(`public/uploads/${auth.user!.id}`)

      // Check if the file already exists
      if (await drive.use().exists(imagePath)) {
        continue // Skip this file if it already exists
      }

      await image.move(imagePath, {
        name: originalName,
      })

      const absolutePublicUrl =
        env.get('BASE_DOMAIN') +
        `${env.get('NODE_ENV') === 'development' ? '' : '/auth'}` +
        `/uploads/${auth.user!.id}/` +
        originalName

      // Save image to database or any other storage
      const imageDb = await Image.create({
        url: absolutePublicUrl,
      })

      // Link image to template
      await imageDb.related('user').associate(auth.user!)

      uploadedUrls.push(absolutePublicUrl)
    }

    return response.ok({
      message: 'Images uploaded successfully',
      urls: uploadedUrls,
    })
  }

  private sanitizeFileName(fileName: string): string {
    return fileName.replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿ'·.\-_ \s]/g, '_')
  }
}
