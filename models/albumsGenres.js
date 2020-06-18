export default (connection, Sequelize, Genres, Albums) => connection.define('albumsGenres', {
  genreId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
  albumId: { type: Sequelize.INTEGER, references: { model: Albums, key: 'id' } },
})
