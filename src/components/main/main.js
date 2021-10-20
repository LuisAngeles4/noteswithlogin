import React from "react";

import { Switch, Route } from "react-router";
import AddNote from "../AddNote/AddNote";
import ViewNote from "../ViewNote/ViewNote";
import Home from "../Home/Home";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/addnote" component={AddNote} />
    <Route exact path="/viewnote" component={ViewNote} />
  </Switch>
);

export default Main;
