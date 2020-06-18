import models from '../models'

export const getAllAlbums = async (request, response) => {
  const albums = await models.Albums.findAll({
    include: [{ model: models.Artists }, { model: models.Genres }],
  })

  return response.send(albums)
}

export const getAlbumByIdOrTitle = async (request, response) => {
  const { identifier } = request.params

  const album = await models.Albums.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { title: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ],
    },
    include: [{ model: models.Artists }, { model: models.Genres }],
  })

  return album
    ? response.send(album)
    : response.sendStatus(404)
}
