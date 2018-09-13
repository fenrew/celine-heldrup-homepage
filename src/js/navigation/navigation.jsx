import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Navigation = props => {
    
    return <div id="navigation-bar">
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
    </div>
};

export default Navigation;
