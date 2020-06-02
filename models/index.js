const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const ArtistsModel = require('./artists')
const GenresModel = require('./genres')
const AlbumsModel = require('./albums')
const AlbumsGenresModel = require('./albumsGenres')


const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host, dialect: 'mysql'
})

const Artists = ArtistsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Albums = AlbumsModel(connection, Sequelize, Artists)
const AlbumsGenres = AlbumsGenresModel(connection, Sequelize, Genres, Albums)

Albums.belongsTo(Artists)
Artists.hasMany(Albums)

Genres.belongsToMany(Albums, { through: AlbumsGenres })
Albums.belongsToMany(Genres, { through: AlbumsGenres })

module.exports = {
    Artists,
    Genres,
    Albums,
    AlbumsGenres,
    Sequelize,

}
