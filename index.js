const express = require('express')

const { getAllArtists, getArtistByIdOrName } = require('./controllers/artists')
const { getAllGenres, getGenreByIdOrName } = require('./controllers/genres')
const { getAllAlbums, getAlbumByIdOrTitle } = require('./controllers/albums')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')


app.get('/', (request, response) =>
{
  return response.render('index')
})


app.get('/artists', getAllArtists)
app.get('/artists/:filter', getArtistByIdOrName)

app.get('/genres', getAllGenres)
app.get('/genres/:filter', getGenreByIdOrName)

app.get('/albums', getAllAlbums)
app.get('/albums/:filter', getAlbumByIdOrTitle)

app.all('*', (Request, Response) =>
{
  return Response.sendStatus(404)
})

app.listen(1338, () =>
{
  console.log('Listening on port 1338...') // eslint-disable-line no-console
})
