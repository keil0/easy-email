import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'
import User from '#models/user'
import { createMagicValidator } from '#validators/magic'
import router from '@adonisjs/core/services/router'
import env from '#start/env'
import crypto from 'node:crypto'
import { DateTime } from 'luxon'

export default class AuthController {
  async check({ response }: HttpContext) {
    return response.safeStatus(200)
  }

  async processMagicLink({ request, response, auth }: HttpContext) {
    const token = request.param('token')
    const user = await User.query()
      .where('token', token)
      .andWhere('tokenCreatedAt', '>', DateTime.now().minus({ minutes: 5 }).toSQL())
      .first()

    if (user) {
      await auth.use('web').login(user)
    }

    return response.redirect('/')
  }

  async login(ctx: HttpContext) {
    return ctx.view.render('auth/login', {
      action: router
        .builder()
        .prefixUrl(env.get('NODE_ENV') === 'development' ? '' : '/auth')
        .make('auth.sendMagicLink'),
    })
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/')
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
      // Create and store token
      user.token = crypto.randomBytes(32).toString('hex')
      user.tokenCreatedAt = DateTime.now()
      await user.save()

      // Build url
      const link = router
        .builder()
        .prefixUrl(
          env.get('NODE_ENV') === 'development'
            ? env.get('BASE_DOMAIN')
            : `${env.get('BASE_DOMAIN')}/auth`
        )
        .params({ token: user.token })
        .make('auth.loginMagic')

      // Send the email
      mail.send((message) => {
        message
          .to(user.email)
          .from(env.get('MAIL_SENDER'))
          .subject('Magic link for the Email Builder')
          .htmlView('emails/magic_link_html', { user, link })
          .textView('emails/magic_link_text', { user, link })
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
