import React from "react";
import { Route, Switch } from "react-router-dom";

import Join from "./component/Join";
import Chat from "./component/Chat";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Join} exact />
      <Route path="/chat" component={Chat} />
    </Switch>
  );
}
