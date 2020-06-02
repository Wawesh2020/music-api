const models = require('../models')

const getAllGenres = async (request, response) =>
{
    const genres = await models.Genres.findAll()

    return response.send(genres)
}

const getGenreByIdOrName = async (request, response) =>
{
    const { filter } = request.params

    const genre = await models.Genres.findOne({

        where: {
            [models.Sequelize.Op.or]: [
                { id: filter },
                { name: { [models.Sequelize.Op.like]: `%${filter}%` } },

            ]

        },

        include: [{
            model: models.Albums,
            include: [{ model: models.Artists }]
        }]
    })

    return genre
        ? response.send(genre)
        : response.sendStatus(404)
}

module.exports = { getAllGenres, getGenreByIdOrName }
