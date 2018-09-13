import React from "react";
import Carousel from "./frontpage/Carousel";
import Shop from "./shop/index";
import Navigation from "./navigation/navigation";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Application extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/shop" component={Shop} />
            <Route path="/" component={Carousel} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Application;
