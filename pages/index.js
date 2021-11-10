import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Button } from 'semantic-ui-react';

class App extends React.Component {

    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Create a loan</Card.Header>
                    <Card.Description>
                        Choose your loan amount
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default App;