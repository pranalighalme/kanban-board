import "./App.css";
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Loader from "./common/Loader";

const Dashboard = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./views/Dashboard")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route
            path="/app"
            exact
            render={(props) => <Dashboard {...props} />}
          />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
