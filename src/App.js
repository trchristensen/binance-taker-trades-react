import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div>
      <CssBaseline />
      <Container style={{ marginTop: '2em' }} fixed>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
