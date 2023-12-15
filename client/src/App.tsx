import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Buy, Home, NotFound, PropertyPage, Rent, SearchResults, SignIn, SignUp, Typography } from './pages';
import { GlobalStyles } from './styles';

const queryClient = new QueryClient();

const App = () => {
         useEffect(() => {
        document.title = 'new title';
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <GlobalStyles />
                <Header />
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
                <Footer />
            </Router>
        </QueryClientProvider>
    );
};
export default App;
