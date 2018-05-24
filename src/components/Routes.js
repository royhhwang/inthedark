import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Front from './Front';
import AFrame from './AFrame';

const Routes = () => (
    <HashRouter>
        <div>
            <Route exact path="/" component={Front} />
            <Route exact path="/aframe" component={AFrame} />
        </div>
    </HashRouter>
);

export default Routes;