import React, { useEffect, useState } from 'react'
import GoBack from '../components/GoBack'
import Page from '../components/Page'
import Artist from '../components/Artist'
import Title from '../components/Title'
import { retrieveAlbumArtists } from '../utils/artists'

export default ({ location }) => {
  const [albumId, setAlbumId] = useState(0)
  const [artist, setArtist] = useState('')
  const [albumList, setAlbumList] = useState([])

  useEffect(() => {
    async function pulldata() {
      const { id, albums, name } = await retrieveAlbumArtists(location)
      setAlbumId(id)
      setArtist(name)
      setAlbumList(albums)
    }
    pulldata()
  }, [])
  return (
    <Page>
      <Title />
      <GoBack />
      {
        albumId
          ? (
            <>
              {
                albumList.map(singleAlbum => (
                  <Artist
                    key={albumId}
                    id={singleAlbum.id}
                    title={singleAlbum.title}
                    name={artist}
                  />
                ))
              }
            </>
          )
          : (<div>Sorry!!! Artist Not Found</div>)
      }
    </Page>
  )
}
