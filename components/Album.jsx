import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
text-decoration: none;
`

const Album = styled.div`
   font-size: 20px;
    margin-bottom: 10px;
    text-align: center
    background-color rgb(59,102,116) ;
  `
export default ({ id, title, artist }) => (
  <Album key={id}>
    <Link to={`/artists/${artist}`}>{`${title}`}</Link>
  </Album>
)
