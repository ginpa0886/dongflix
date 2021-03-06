import React from "react";
import { HashRouter as Routers, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

function Router(){
  return (
  <Routers>
    <>
    <Header />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/tv" exact component={TV} />
    <Route path="/search" component={Search} />
    <Route path="/movie/:id" component={Detail} />
    <Route path="/show/:id" component={Detail} />
    <Redirect from="*" to="/" />
    </Switch>
    </>
  </Routers>
  )
}

export default Router;