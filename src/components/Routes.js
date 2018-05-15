import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Front from './Front';

const Routes = () => (
    <HashRouter>
        <Route exact path="/*" component={Front} />
    </HashRouter>
);

export default Routes;