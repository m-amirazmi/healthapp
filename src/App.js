import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { routes } from './utils/routes'

export const App = () => {

  const renderRoutes = () => {
    return routes.map((route) => <Route exact path={route.path} component={route.component} />)
  }

  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes()}
        <Redirect from="*" to="/clinics" />
      </Switch>
    </BrowserRouter>
  )
}
