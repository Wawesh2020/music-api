module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER ' },
    */
    await queryInterface.bulkInsert('artists', [
      { name: 'Michael Jackson' },
      { name: 'Drake' },
      { name: 'Madonna' },
      { name: 'Bob Marley' },
      { name: 'Kanye West' },

    ])

    await queryInterface.bulkInsert('genres', [
      { name: 'Dance' },
      { name: 'Pop' },
      { name: 'Pop Rock' },
      { name: 'R & B' },
      { name: 'Rap' },
      { name: 'Reggae' },

    ])

    await queryInterface.bulkInsert('albums', [
      { title: 'Thriller', artistId: 1 },
      { title: 'TaKe Care', artistId: 2 },
      { title: 'True Blue', artistId: 3 },
      { title: 'Catch A Fire', artistId: 4 },
      { title: 'College Dropout', artistId: 5 },

    ])

    return queryInterface.bulkInsert('albumsGenres', [
      { albumId: 1, genreId: 2 },
      { albumId: 1, genreId: 3 },
      { albumId: 1, genreId: 1 },
      { albumId: 2, genreId: 5 },
      { albumId: 2, genreId: 4 },
      { albumId: 2, genreId: 2 },
      { albumId: 3, genreId: 1 },
      { albumId: 3, genreId: 2 },
      { albumId: 3, genreId: 3 },
      { albumId: 4, genreId: 6 },
      { albumId: 4, genreId: 4 },
      { albumId: 4, genreId: 3 },
      { albumId: 5, genreId: 5 },
      { albumId: 5, genreId: 2 },
      { albumId: 5, genreId: 4 },

    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users' },
    */

    await queryInterface.bulkDelete('albumsGenres')

    await queryInterface.bulkDelete('albums')

    await queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('artists')
  },
}
