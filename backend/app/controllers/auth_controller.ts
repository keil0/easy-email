import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async index({ response }: HttpContext) {
    return response.safeStatus(200)
  }
}
