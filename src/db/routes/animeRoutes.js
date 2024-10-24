const { Router } = require('express')
const animeRouter = Router()
const checkToken = require('../middleware/checkToken')

const addAnime = require('../controllers/anime/addAnime')
const listAllAnime = require('../controllers/anime/listAllAnime')
const animeDetails = require('../controllers/anime/animeDetails')
const updateStudio = require('../controllers/anime/updateStudio')
const updateGenre = require('../controllers/anime/updateGenre')
const deleteAnime = require('../controllers/anime/deleteAnime')
const deleteAllAnime = require('../controllers/anime/deleteAllAnime')

animeRouter.post('/addAnime', checkToken, addAnime)
animeRouter.get('/listAllAnime', checkToken, listAllAnime)
animeRouter.get('/animeDetails', checkToken, animeDetails)
animeRouter.put('/updateStudio', checkToken, updateStudio)
animeRouter.put('/updateGenre', checkToken, updateGenre)
animeRouter.delete('/deleteAnime', checkToken, deleteAnime)
animeRouter.delete('/deleteAllAnime', checkToken, deleteAllAnime)

module.exports = animeRouter