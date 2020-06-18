import fetchArtistsForAlbum from '../actions/artists'

export const getAlbumIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/artists/').pop()
  : ''
)

export const retrieveAlbumArtists = async (location) => {
  const albumId = getAlbumIdFromUrl(location)

  if (!albumId) return { id: 0, name: '', albums: [] }

  const { id, albums, name } = await fetchArtistsForAlbum(albumId)

  if (!id || !albums || !name) return { id: 0, name: '', albums: [] }

  return { id, name, albums }
}
