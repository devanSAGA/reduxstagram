import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

import styles from "./styles/style.styl";
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
