const Anime = require('../../models/animeModel');

const deleteAllAnime = async (req, res) => {
    try {
        const output = await Anime.destroy({
            where: {},
            truncate: true
        });
        res.status(200).json({ message: 'All Animes deleted successfully', deleted: output });
    } catch (error) {
        res.status(418).json(error);
        console.log(error);
    }
};

module.exports = deleteAllAnime;
