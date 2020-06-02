const Artists = (connection, Sequelize) =>
{
    return connection.define('artists', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING, allowNull: false },

    })
}

module.exports = Artists