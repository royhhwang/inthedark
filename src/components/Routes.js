import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Front from './Front';
import AFrame from './AFrame';
import Error from './Error';

const Routes = () => (
    <HashRouter>
        <div>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper">
                {["/", "/?"].map((path, index) =>
                    <Route exact path={path} component={Front} key={index} />
                )}
                <Route exact path="/aframe" component={AFrame} />
                <Route component={Error} />
            </AnimatedSwitch>
        </div>
    </HashRouter>
);

export default Routes;