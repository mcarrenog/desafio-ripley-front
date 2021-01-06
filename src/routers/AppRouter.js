import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


import { MyNavbar } from '../components/ui/MyNavbar';
import { HomeScreen } from '../components/product/HomeScreen';
import { CrudScreen } from '../components/product/CrudScreen';
import { ProductScreen } from '../components/product/ProductScreen';



export const AppRouter = () => {

    const [search, setSearch] = useState([]);
  
    return (
        <Router>
            <div>
            <MyNavbar setSearch={setSearch} />
               {
                
                
                search.map((category) =>
                <ProductScreen
                    key={category}
                    search={category} />
            )
                }
                

                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path='/crud' component={CrudScreen} />
                    
                </Switch>
            </div>
        </Router>
    )
}
