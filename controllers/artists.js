const models = require('../models')

const getAllArtists = async (request, response) =>
{
    const artists = await models.Artists.findAll()

    return response.send(artists)
}

const getArtistByIdOrName = async (request, response) =>
{
    const { filter } = request.params

    const artist = await models.Artists.findOne({
        where: {
            [models.Sequelize.Op.or]: [
                { id: filter },
                { name: { [models.Sequelize.Op.like]: `%${filter}%` } },

            ]

        },

        include: [{
            model: models.Albums,
            include: [{ model: models.Genres }]
        }]
    })

    return artist
        ? response.send(artist)
        : response.sendStatus(404)
}

module.exports = { getAllArtists, getArtistByIdOrName }