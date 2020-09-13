import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, Rent, Buy, NotFound } from './pages';
import Header from './components/Header';
import { GlobalStyles } from './styles';

function App() {
    return (
        <main>
            <GlobalStyles />
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/rent" component={Rent} />
                <Route path="/buy" component={Buy} />
                <Route component={NotFound} />
            </Switch>
        </main>
    );
}

export default App;
