import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'
import User from '#models/user'
import { createMagicValidator } from '#validators/magic'
import router from '@adonisjs/core/services/router'
import env from '#start/env'

export default class AuthController {
  async check({ response }: HttpContext) {
    if (false) {
      return response.safeStatus(200)
    } else {
      return response.redirect(
        router
          .builder()
          .prefixUrl(env.get('NODE_ENV') === 'development' ? '' : '/auth')
          .make('auth.login')
      )
    }
  }

  async login(ctx: HttpContext) {
    return ctx.view.render('auth/login', {
      action: router
        .builder()
        .prefixUrl(env.get('NODE_ENV') === 'development' ? '' : '/auth')
        .make('auth.sendMagicLink'),
    })
  }

  async checkInbox(ctx: HttpContext) {
    return ctx.view.render('auth/check-email')
  }

  async sendMagicLink({ request, response }: HttpContext) {
    // Validate data
    const data = request.all()
    const payload = await createMagicValidator.validate(data)

    // Get the user from the database
    const user = await User.findBy('email', payload.email)

    if (user) {
      mail.send((message) => {
        message
          .to(user.email)
          .from(env.get('MAIL_SENDER'))
          .subject('Magic link for the Email Builder')
          .htmlView('emails/magic_link_html', { user, token: 'REPLACE_TOKEN' })
          .textView('emails/magic_link_text', { user, token: 'REPLACE_TOKEN' })
      })
    }

    return response.redirect(
      router
        .builder()
        .prefixUrl(env.get('NODE_ENV') === 'development' ? '' : '/auth')
        .make('auth.checkInbox')
    )
  }
}
