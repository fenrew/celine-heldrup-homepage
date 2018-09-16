import React from "react";
import Carousel from "./frontpage/Carousel";
import Shop from "./shop/shop";
import Navigation from "./navigation/navigation";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Auth from "./loggin/Application";
import NotFound from "./loggin/NotFound"

class Application extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/" component={Carousel} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Application;
