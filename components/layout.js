import React from 'react';
import Header from './header';
import Request from '../components/request';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Layout = (props) => {
    return (
        <Container>
            <Header/>
            {props.children}
            <Request
                contract={props.contract}
            />
        </Container>
    );
}

export default Layout;