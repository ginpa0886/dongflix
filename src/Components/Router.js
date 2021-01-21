import React from "react";
import { BrowserRouter as Routers, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

function Router(){
  return (
  <Routers>
    <>
    <Header />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/tv" exact component={TV} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
    </Switch>
    </>
  </Routers>
  )
}

export default Router;