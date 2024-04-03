/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [AuthController, 'check']).as('auth.check').use(middleware.auth())
router.get('/login', [AuthController, 'login']).as('auth.login')
router.get('/check-inbox', [AuthController, 'checkInbox']).as('auth.checkInbox')
router
  .get('/magic-connect/:token', [AuthController, 'processMagicLink'])
  .as('auth.processMagicLink')
router.post('/magic', [AuthController, 'sendMagicLink']).as('auth.sendMagicLink')
