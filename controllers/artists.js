import models from '../models'

export const getAllArtists = async (request, response) => {
  const artists = await models.Artists.findAll()

  return response.send(artists)
}

export const getArtistByIdOrName = async (request, response) => {
  const { identifier } = request.params

  const artist = await models.Artists.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { name: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ],
    },
    include: [{
      model: models.Albums,
      include: [{ model: models.Genres }],
    }],
  })

  return artist
    ? response.send(artist)
    : response.sendStatus(404)
}
