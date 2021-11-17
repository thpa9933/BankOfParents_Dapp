import React from 'react';
import { Form, Message, Button, Input } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Contract from '../ethereum/contract';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: false,
            loading: false,
            value: 0
        }
    }

    onSubmit = async () => {
        const accounts = await web3.eth.getAccounts();
        console.log(this.state.value);
        console.log(Contract);
        await Contract.methods.askForMoney(this.state.value).send({
            from: accounts[0]
        });
    }

    render() {
        return (
            <>
                <h3>Creat a loan</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>How much money would you like to borrow?</label>
                        <Input 
                            label="Dollars"
                            labelPosition="right"
                            value={this.state.value}
                            onChange={(event) => this.setState({ value: event.target.value }) }
                        />
                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage}/>
                    <Button loading={this.state.loading} primary>Request!</Button>
                </Form>
            </>
        );
    }
}

export default Request;