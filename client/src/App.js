import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/contactState';
import AuthState from './context/auth/AuthState';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <AuthState>
            <ContactState>
                <Router>
                    <Fragment>
                        <Navbar />
                        <div className="container">
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route
                                    exact
                                    path="/about"
                                    element={<About />}
                                />
                            </Routes>
                        </div>
                    </Fragment>
                </Router>
            </ContactState>
        </AuthState>
    );
};

export default App;
