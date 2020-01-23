import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Global from "./style/Global";

import Join from "./component/Join";
import Chat from "./component/Chat";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Global/>
    </Router>
  );
}

export default App;
