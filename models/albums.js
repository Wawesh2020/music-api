const Albums = (connection, Sequelize, Artists) =>
{
    return connection.define('albums', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING, allowNull: false },
        artistId: { type: Sequelize.INTEGER, references: { model: Artists, key: 'id' } },
    })
}

module.exports = Albums