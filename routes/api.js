const router = require('express').Router();
const middlewares = require('./middlewares')

const apiFilmsRouter= require('./api/films')
const apiUsersRouter= require('./api/users')

router.use('/films',middlewares.checkToken,apiFilmsRouter) //para crear una pelicula hay q comentar el midd
router.use('/users',apiUsersRouter)


module.exports = router 