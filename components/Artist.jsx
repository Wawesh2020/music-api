import React from 'react'
import styled from 'styled-components'

const Artist = styled.div`
font-size: 20px;
margin: 10px;
text-align: center;
font-weight: inherit;
font-family: fantasy;
`
export default ({ id, name, title }) => (
  <Artist key={id}>
    {`${title} by ${name}`}
  </Artist>
)
