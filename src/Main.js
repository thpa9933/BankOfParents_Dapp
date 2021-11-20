import React, { Component } from 'react';
import { Route, Routes, NavLink, HashRouter } from 'react-router-dom';
import Layout from './components/layout';
import Request from './components/request';
import Loan from './components/loan';

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <div className="content">
                        <div className="menu">
                            <div id="nav"><NavLink to='/'>Request</NavLink></div>
                            <div id="nav"><NavLink to='/createLoan'>Create Loan</NavLink></div>
                        </div>

                        <Routes>
                            <Route exact path="/" element={<Request/>}/>
                            <Route exact path="/createLoan" element={<Loan/>}/>
                        </Routes>
                    </div>
                </Layout>
            </HashRouter>


        );
    }
}

export default Main;