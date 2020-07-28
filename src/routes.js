import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route component={() => (<div>Error 404</div>)} /> */}
            </Switch>
        </BrowserRouter>
    );
}