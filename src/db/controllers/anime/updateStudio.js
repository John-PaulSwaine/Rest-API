const Anime = require('../../models/animeModel')

const updateStudio = async (req, res) => {
    try {
        const outcome = await Anime.update(
            {studio: req.body.studio},            
            {where: {
                title : req.body.title
            }}
        ) 
        res.status(200).json(outcome)
        console.log(outcome)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = updateStudio