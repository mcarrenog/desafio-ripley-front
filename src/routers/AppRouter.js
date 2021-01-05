import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Routenk,
    Route
} from 'react-router-dom';

import { ProductScreen } from '../components/product/ProductScreen';
import { MyNavbar } from '../components/ui/MyNavbar';
import { HomeScreen } from '../components/product/HomeScreen';
import { CrudScreen } from '../components/product/CrudScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <MyNavbar />

                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path='/crud' component= {CrudScreen}/>
                </Switch>
            </div>
        </Router>
    )
}
