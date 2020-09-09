import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Rent from './pages/Rent';
import Buy from './pages/Buy';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
    return (
        <main>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/rent" component={Rent} />
                <Route path="/buy" component={Buy} />
                <Route component={NotFound}/>
            </Switch>
        </main>
    );
}

export default App;
