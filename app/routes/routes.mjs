import express from 'express'
import middleware from '../platform-middlewares/index.mjs'
import material from '../controllers/materials.mjs'

const router = express.Router()

router.post('/material', material.insert)
router.get('/material/:id', material.findOne)
router.get('/materials/:id', material.findMany)
router.put('/material/:id', material.update)
router.delete('/material/:id', material.deleteOne)

// route middleware to verify a token
// secured API's for logged in end user if authentication is ever added

export default router

