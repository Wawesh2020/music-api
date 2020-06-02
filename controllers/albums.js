const models = require('../models')

const getAllAlbums = async (request, response) =>
{
    const albums = await models.Albums.findAll({
        include: [{ model: models.Artists }, { model: models.Genres }]
    })

    return response.send(albums)
}

const getAlbumByIdOrTitle = async (request, response) =>
{
    const { filter } = request.params

    const album = await models.Albums.findOne({
        where: {

            [models.Sequelize.Op.or]: [
                { id: filter },
                { title: { [models.Sequelize.Op.like]: `%${filter}%` } },

            ]


        },
        include: [
            { model: models.Artists },
            { model: models.Genres },
        ]
    })

    return album
        ? response.send(album)
        : response.sendStatus(404)
}

module.exports = { getAllAlbums, getAlbumByIdOrTitle }
