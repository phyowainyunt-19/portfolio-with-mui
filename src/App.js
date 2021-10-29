import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, Resume, Portfolio, Navbar, Contacts } from './components';
import Particles from './components/Particles';

import CssBaseline from '@mui/material/CssBaseline';


const App = () => {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Particles />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contacts} />
        </>
    )
}

export default App
