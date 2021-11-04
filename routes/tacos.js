import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/' ,isLoggedIn, tacosCtrl.index)
router.get('/:id', tacosCtrl.show)
router.post('/', isLoggedIn, tacosCtrl.create)

// localhost:3000/tacos/:id/flip-tasty
router.patch("/:id/flip-tasty", isLoggedIn, tacosCtrl.flipTasty)

export {
  router
}
