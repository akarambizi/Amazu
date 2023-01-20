import React, { useEffect } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
// import { Home, Rent, Buy, NotFound, Typography, Property, SignUp, SignIn, SearchResults } from './pages';
// import { Footer, Header } from './components';
// import { GlobalStyles } from './styles';

function App() {
    useEffect(() => {
        document.title = 'new title';
    }, []);
    return (
        <p>hello world</p>
        // <Router>
        //     {/* <GlobalStyles /> */}
        //     {/* <Header /> */}
        //     <main>
        //         {/* <Routes>
        //             <Route path="/" element={<Home />} exact />
        //             <Route path="/rent" element={<Rent />} />
        //             <Route path="/buy" element={<Buy />} />
        //             <Route path="/typography" element={<Typography />} />
        //             <Route path="/property" element={<Property />} />
        //             <Route path="/signup" element={<SignUp />} />
        //             <Route path="/signin" element={<SignIn />} />
        //             <Route path="/search" element={<SearchResults />} />
        //             <Route element={<NotFound />} />
        //         </Routes> */}
        //         <p>Hello world!</p>
        //     </main>
        //     {/* <Footer /> */}
        // </Router>
    );
}

export default App;
