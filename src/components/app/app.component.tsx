import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client';
import  "./app.component.css";
import Header from '../header/header.component';
import About from '../../pages/about/about.page';
import Home from '../../pages/home/home.page';

import client from '../../common/apolo-client';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
    
                </Routes>
            </Router>
        </ApolloProvider>
      
    );
}


export default App;