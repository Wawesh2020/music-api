export default (connection, Sequelize, Artists) => connection.define('albums', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  artistId: { type: Sequelize.INTEGER, references: { model: Artists, key: 'id' } },
})
