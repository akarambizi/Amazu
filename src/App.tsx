import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Rent, Buy, NotFound, Typography, PropertyPage, SignUp, SignIn, SearchResults } from './pages';
import { Footer, Header } from './components';
import { GlobalStyles } from './styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
    useEffect(() => {
        document.title = 'new title';
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <GlobalStyles />
                <Header location={{ pathname: 'home' }} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rent" element={<Rent />} />
                        <Route path="/buy" element={<Buy />} />
                        <Route path="/typography" element={<Typography />} />
                        <Route path="/property" element={<PropertyPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route element={<NotFound />} />
                    </Routes>
                </main>
                <Footer location={{ pathname: 'home' }} />
            </Router>
        </QueryClientProvider>
    );
};
export default App;
