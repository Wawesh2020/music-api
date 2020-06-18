import express from 'express'
import path from 'path'
import { getAllArtists, getArtistByIdOrName } from './controllers/artists'
import { getAllGenres, getGenreByIdOrName } from './controllers/genres'
import { getAllAlbums, getAlbumByIdOrTitle } from './controllers/albums'

const app = express()

app.use(express.static('public'))

app.get('/api/artists', getAllArtists)
app.get('/api/artists/:identifier', getArtistByIdOrName)

app.get('/api/genres', getAllGenres)
app.get('/api/genres/:identifier', getGenreByIdOrName)

app.get('/api/albums', getAllAlbums)
app.get('/api/albums/:identifier', getAlbumByIdOrTitle)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1336, () => {
  console.log('Listening on port 1336...') // eslint-disable-line no-console
})
