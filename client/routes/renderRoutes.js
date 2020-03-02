import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import {useSelector} from "react-redux";

const RenderRoutes = ({
  routes,
  authPath = "/login",
  extraProps = {},
  switchProps = {}
}) => {
  const authed= !!localStorage.token;
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            if (!route.requiresAuth || authed || route.path === authPath) {
              return (
                <route.component {...props} {...extraProps} route={route} />
              );
            } else
              return (
                <Redirect
                  to={{ pathname: authPath, state: { from: props.location } }}
                />
              );
          }}
        />
      ))}
    </Switch>
  ) : null;
};

export default RenderRoutes;
