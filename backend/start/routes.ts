/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [AuthController, 'check']).as('auth.check')
router.get('/login', [AuthController, 'login']).as('auth.login')
router.get('/check-inbox', [AuthController, 'checkInbox']).as('auth.checkInbox')
router.post('/magic', [AuthController, 'sendMagicLink']).as('auth.sendMagicLink')
