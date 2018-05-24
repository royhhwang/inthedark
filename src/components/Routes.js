import React from 'react';
import { BrowserRouter, Link, Route, HashRouter } from 'react-router-dom';
import Front from './Front';
import AFrame from './AFrame';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Front} />
            <Route exact path="/aframe" component={AFrame} />
        </div>
    </BrowserRouter>
);

export default Routes;