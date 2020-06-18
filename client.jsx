import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/Error'
import AlbumsPage from './pages/Albums'
import ArtistsPage from './pages/Artists'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/artists" component={ArtistsPage} />
      <Route exact path="/" component={AlbumsPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
