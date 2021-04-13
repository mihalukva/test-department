import React from "react";
import { Route, Switch } from "react-router-dom";
import EditDepartment from "./page-editor";
import Department from "./page-departments";

export default class AppRouter extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/open/:id" component={EditDepartment} />
          <Route exact path="/edit/:id" component={EditDepartment} />
          <Route exact path="/create" component={EditDepartment} />
          <Route exact path="/" component={Department} />
        </Switch>
      </>
    );
  }
}
