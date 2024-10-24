const Anime = require('../../models/animeModel')

const animeDetails = async (req, res) => {
    try {
        const output = await Anime.findOne({
            where: {
            title: req.body.title
    }})
        res.status(200).json(output)
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = animeDetails