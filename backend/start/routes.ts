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
const TemplatesController = () => import('#controllers/templates_controller')
import router from '@adonisjs/core/services/router'

// Auth & session management
router.get('/', [AuthController, 'check']).as('auth.check').use(middleware.auth())
router.get('/login', [AuthController, 'login']).as('auth.login')
router.get('/check-inbox', [AuthController, 'checkInbox']).as('auth.checkInbox')
router.get('/magic-connect/:token', [AuthController, 'processMagicLink']).as('auth.loginMagic')
router.post('/logout', [AuthController, 'logout']).use(middleware.auth()).as('auth.logout')
router.post('/magic', [AuthController, 'sendMagicLink']).as('auth.sendMagicLink')

// Template & image management
router
  .group(() => {
    // CRUD Template
    router.get('/templates', [TemplatesController, 'getMyTemplates']).as('templates.getMyTemplates')
    router
      .get('/templates/:id', [TemplatesController, 'getMyTemplate'])
      .as('templates.getMyTemplate')
    router
      .post('/templates', [TemplatesController, 'createMyTemplate'])
      .as('templates.createMyTemplate')
    router
      .patch('/templates/:id', [TemplatesController, 'updateMyTemplate'])
      .as('templates.updateMyTemplate')
    router
      .delete('/templates/:id', [TemplatesController, 'deleteMyTemplate'])
      .as('templates.deleteMyTemplate')
    // UPLOAD IMAGE
    router
      .post('/templates/upload', [TemplatesController, 'uploadTemplateImage'])
      .as('templates.uploadTemplateImage')
  })
  .use(middleware.auth())
