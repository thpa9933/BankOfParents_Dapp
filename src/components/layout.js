import React from 'react';
import Header from './header';
import 'semantic-ui-css/semantic.min.css';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
}

export default Layout;