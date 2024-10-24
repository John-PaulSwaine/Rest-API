const {Router} = require('express')
const gameRouter = Router()
const checkToken = require('../middleware/checkToken')

const addGame = require('../controllers/games/addGame')
const listAllGames = require('../controllers/games/listAllGames')
const updateDeveloper = require('../controllers/games/updateDeveloper')
const updateGenre = require('../controllers/games/updateGenre')
const deleteGame = require('../controllers/games/deleteGame')
const gameDetails = require('../controllers/games/gameDetails')
const deleteAllGames = require('../controllers/games/deleteAllGames')

gameRouter.post('/addGame', checkToken, addGame)
gameRouter.get('/listAllGames', checkToken, listAllGames)
gameRouter.get('/gameDetails', checkToken, gameDetails)
gameRouter.put('/updateDeveloper', checkToken, updateDeveloper)
gameRouter.put('/updateGenre', checkToken, updateGenre)
gameRouter.delete('/deleteGame', checkToken, deleteGame)
gameRouter.delete('/deleteAllGames', checkToken, deleteAllGames)

module.exports = gameRouter