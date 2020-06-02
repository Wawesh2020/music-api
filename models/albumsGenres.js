const AlbumsGenres = (connection, Sequelize, Genres, Albums) =>
{
    return connection.define('albumsGenres', {
        genreId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
        albumId: { type: Sequelize.INTEGER, references: { model: Albums, key: 'id' } },
    })
}

module.exports = AlbumsGenres