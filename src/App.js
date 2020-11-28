import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";

import DogsBreedName from "./components/dogsBreedName/DogsBreedNames";
import DogsBreedImages from "./components/dogsBreedImages/DogsBreedImages";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HashRouter basename="/">
          <div className="App">
            <Switch>
              <Route exact path="/" component={DogsBreedName} />
              <Route
                exact
                path="/showDogImage/:name"
                component={DogsBreedImages}
              />
              <Route
                exact
                path="/showDogImage/:name/:subname"
                component={DogsBreedImages}
              />
            </Switch>
          </div>
        </HashRouter>
      </Router>
    </Provider>
  );
}

export default App;
