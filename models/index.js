import Sequelize from 'sequelize'
import allConfigs from '../configs/sequelize'
import ArtistsModel from './artists'
import GenresModel from './genres'
import AlbumsModel from './albums'
import AlbumsGenresModel from './albumsGenres'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const {
  username, password, database, host, dialect,
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const Artists = ArtistsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Albums = AlbumsModel(connection, Sequelize, Artists)
const AlbumsGenres = AlbumsGenresModel(connection, Sequelize, Genres, Albums)

Albums.belongsTo(Artists)
Artists.hasMany(Albums)

Genres.belongsToMany(Albums, { through: AlbumsGenres })
Albums.belongsToMany(Genres, { through: AlbumsGenres })

export default {
  Artists,
  Genres,
  Albums,
  AlbumsGenres,
  Sequelize,
}
