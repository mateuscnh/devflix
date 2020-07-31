import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewCategory from './pages/NewCategory';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" component={NewCategory} />
        </Switch>
    );
}