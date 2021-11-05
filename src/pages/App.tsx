import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { AddressBook, LandingPage, NotFound } from '.'

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/address-book" component={AddressBook} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default withRouter(App)
