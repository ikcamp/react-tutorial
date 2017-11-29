import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  HashRouter as Router
} from 'react-router-dom'

import AppContainer from '@/containers/AppContainer'
import SceneCardListContainer from '@/containers/SceneCardListContainer'
import SceneCardInfoContainer from '@/containers/SceneCardInfoContainer'
import NoMatchContainer from '@/containers/NoMatchContainer'
const routes = (
  <Router>
    <AppContainer>
      <Switch>
        <Route path='/list' component={SceneCardListContainer} />
        <Route path='/scene/:sceneId' component={SceneCardInfoContainer} />
        <Redirect from='/' to='/list' />
        <Route component={NoMatchContainer} />
      </Switch>
    </AppContainer>
  </Router>
)

export default routes
