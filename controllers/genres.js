import models from '../models'

export const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll()

  return response.send(genres)
}

export const getGenreByIdOrName = async (request, response) => {
  const { identifier } = request.params

  const genre = await models.Genres.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { name: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ],
    },
    include: [{
      model: models.Albums,
      include: [{ model: models.Artists }],
    }],
  })

  return genre
    ? response.send(genre)
    : response.sendStatus(404)
}
