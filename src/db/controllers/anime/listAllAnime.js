const Anime = require('../../models/animeModel')

const listAllAnime = async (req, res) => {
    try {
        const output = await Anime.findAll()
        res.status(200).json(output)
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = listAllAnime