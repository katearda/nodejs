const express = require('express')
const router = express.Router()

const workoutController  = require('./controller')


router.get('/', workoutController.listItem )

router.get('/:id', workoutController.getItem)

router.post('/', workoutController.createItem )

router.delete('/:id', workoutController.deleteItem)

router.patch('/:id', workoutController.updateItem)

module.exports = router
