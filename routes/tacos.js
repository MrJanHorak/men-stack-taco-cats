import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/' ,isLoggedIn, tacosCtrl.index)
router.post('/', isLoggedIn, tacosCtrl.create)

export {
  router
}