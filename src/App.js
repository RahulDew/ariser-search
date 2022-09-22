import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ResultPage from "./components/ResultPage";
import "./fontsManage.css";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Home setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      </Route>
      <Route exact path={["/search", "/image", "/news", "/videos"]}>
        <ResultPage setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      </Route>
    </Switch>
  );
};

export default App;
