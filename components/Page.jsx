import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 60px auto 0;
  width: 60%;
  background-color: aquamarine;

`

export default ({ children }) => (
  <Page>
    { children }
  </Page>
)
