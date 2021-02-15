import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              {/* 'exact' means it wont match to /test, /test1 etc */}
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
