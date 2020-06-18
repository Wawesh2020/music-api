import fetchAlbums from '../actions/albums'

export const filteredAlbums = (list, term, setter) => {
  const filtered = list.filter(album => album.title.toLowerCase().includes(term.toLowerCase()))

  setter(filtered)
}

export const retrieveAlbums = async (listSetter, filteredListSetter) => {
  const albums = await fetchAlbums()

  listSetter(albums)
  filteredListSetter(albums)
}
