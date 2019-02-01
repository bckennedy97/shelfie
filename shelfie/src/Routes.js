import React from "react";
import {Route,Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard"
import Form from "./components/Form/Form";

export default (
    <Switch>
        <Route path="/edit/:id" component={Form}></Route>
        <Route path="/add" component={Form}></Route>
        <Route path="/" component={Dashboard}></Route>
    </Switch>
)