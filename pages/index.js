import React from 'react';
import Layout from '../components/layout';
import Contract from '../ethereum/contract';

class App extends React.Component {

    render() {
        return (
            <Layout
                contract={Contract}
            />
        );
    }
}

export default App;