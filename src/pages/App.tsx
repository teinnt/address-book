import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { AddressBook, Edit, LandingPage, NewContact, NotFound, SendMoney } from '.'

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/edit/:name" component={Edit} />
      <Route exact path="/send/:name" component={SendMoney} />
      <Route exact path="/new-contact" component={NewContact} />
      <Route exact path="/address-book" component={AddressBook} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default withRouter(App)
