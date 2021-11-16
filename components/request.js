import React from 'react';
import { render } from 'react-dom';
import { Form, Message, Button, Input } from 'semantic-ui-react';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: false,
            loading: false, 
            value: 0,
            contractInstance: undefined
        }
    }

    componentDidMount = () => {
        this.setState({
            contractInstance: this.props.contract
        })
    }

    onSubmit = async (event) => {
        const ct = this.state.contractInstance;

        try {
            const accounts = web3.eth.getAccount();

            await ct.methods.askForMoney(event.target).send({
                from: accounts[0]
            });

        } catch (err) {
            this.setState({
                errorMessage: err.Message
            });
        }
    }

    render() {
        return (
            <>
                <h3>Creat a loan</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>What size loan?</label>
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

                <Message error header="Oops!" content={this.state.errorMessage}/>
            </>
        );
    }
}

export default Request;