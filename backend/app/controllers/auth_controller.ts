import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async check({ response }: HttpContext) {
    if (false) {
      return response.safeStatus(200)
    } else {
      return response.redirect('auth/login')
    }
  }

  async login(ctx: HttpContext) {
    return ctx.view.render('auth/login')
  }

  async magicLink(ctx: HttpContext) {}
}
