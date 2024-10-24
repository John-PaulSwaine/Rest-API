const Anime = require('../models/animeModel')

const addAnime = async (req, res) => {
    try {
        const output = await Anime.create({
            title: req.body.title,
            studio: req.body.studio,
            genre: req.body.genre
        })
        res.status(200).json({msg: `${req.body.title} has successfully been added.`})
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = addAnime