const {Router} = require('express')
const gameRouter = Router()
const checkToken = require('../middleware/checkToken')

const addGame = require('../controllers/addGame')
const listAllGames = require('../controllers/listAllGames')
const updateDeveloper = require('../controllers/updateDeveloper')
const updateGenre = require('../controllers/updateGenre')
const deleteGame = require('../controllers/deleteGame')
const gameDetails = require('../controllers/gameDetails')
const deleteAllGames = require('../controllers/deleteAllGames')

gameRouter.post('/addGame', addGame, checkToken)
gameRouter.get('/listAllGames', listAllGames, checkToken)
gameRouter.get('/gameDetails', gameDetails, checkToken)
gameRouter.put('/updateDeveloper', updateDeveloper, checkToken)
gameRouter.put('/updateGenre', updateGenre, checkToken)
gameRouter.delete('/deleteGame', deleteGame, checkToken)
gameRouter.delete('/deleteAllGames', deleteAllGames, checkToken)

module.exports = gameRouter