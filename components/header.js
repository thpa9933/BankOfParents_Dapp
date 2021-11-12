import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes';

const Header = () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Menu.Item name='Bank of Parents'>
                <Link route="/">
                    <a className="item">Bank of Parents Loan Program</a>
                </Link>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item name='Create a loan' position='right'/>
            </Menu.Menu>

        </Menu>
    );
}

export default Header;