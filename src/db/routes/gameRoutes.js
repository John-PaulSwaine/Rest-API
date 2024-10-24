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

gameRouter.post('/addGame', checkToken, addGame)
gameRouter.get('/listAllGames', checkToken, listAllGames)
gameRouter.get('/gameDetails', checkToken, gameDetails)
gameRouter.put('/updateDeveloper', checkToken, updateDeveloper)
gameRouter.put('/updateGenre', checkToken, updateGenre)
gameRouter.delete('/deleteGame', checkToken, deleteGame)
gameRouter.delete('/deleteAllGames', checkToken, deleteAllGames)

module.exports = gameRouter