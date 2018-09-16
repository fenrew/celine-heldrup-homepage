import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from "react";
import Auth from "./Auth/index";

import NotFound from "./NotFound";

class Application extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default Application;