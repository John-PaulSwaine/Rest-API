const Anime = require('../../models/animeModel')

const deleteAnime = async (req, res) => {
    try {
        const output = await Anime.destroy(            
            {where: {
                title : req.body.title
            }}
        )
        res.status(200).json(output)
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = deleteAnime