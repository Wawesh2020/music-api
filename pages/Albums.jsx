import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import Album from '../components/Album'
import Title from '../components/Title'
import { filteredAlbums, retrieveAlbums } from '../utils/albums'

export default () => {
  const [albumList, setAlbumList] = useState([])
  const [filteredAlbumList, setFilteredAlbumList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    retrieveAlbums(setAlbumList, setFilteredAlbumList)
  }, [])

  useEffect(() => {
    filteredAlbums(albumList, searchTerm, setFilteredAlbumList)
  }, [searchTerm])

  return (
    <Page>
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      <div>
        {filteredAlbumList.map(album => (
          <Album
            key={album.id}
            title={album.title}
            artist={album.artist.name}
          />
        ))}
      </div>
    </Page>
  )
}
