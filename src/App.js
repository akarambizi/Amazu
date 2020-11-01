import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './styles';
import { Home, Rent, Buy, NotFound, Typography } from './pages';
import { Footer, Header } from './components';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/rent" component={Rent} />
                    <Route path="/buy" component={Buy} />
                    <Route path="/typography" component={Typography} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
