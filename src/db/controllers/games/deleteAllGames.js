const Game = require('../../models/gameModel');

const deleteAllGames = async (req, res) => {
    try {
        const output = await Game.destroy({
            where: {},
            truncate: true
        });
        res.status(200).json({ message: 'All Games deleted successfully', deleted: output });
    } catch (error) {
        res.status(418).json(error);
        console.log(error);
    }
};

module.exports = deleteAllGames;
