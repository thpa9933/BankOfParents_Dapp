import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class Loan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loanAmount: 0,
            expirationDate: 0,
            interestRate: 0,
            payment: 0,
            errorMessage: '',
            loading: false
        }
    }

    onSubmit = async (event) => {
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
        } catch (err) {
            this.setState({errorMessage: err.errorMessage, loading: false });
        }
    }

    render() {
        return (
            <div>
                <h2> load page </h2>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <label>Loan Amount</label>
                    <Input 
                        label="Dollars"
                        labelPosition="right"
                        value={this.state.loanAmount}
                        onChange={(event) => this.setState({ loanAmount: event.target.value })}
                    />
                    {/* <Input 
                        label="Pay back Date"
                        labelPosition="right"
                        value={}
                        onChange={}
                    />
                    <Input 
                        label="Interest Rate"
                        labelPosition="right"
                        value={}
                        onChange={}
                    />
                    <Input 
                        label="Monthly payment"
                        labelPosition="right"
                        value={}
                        onChange={}
                    /> */}
                    <Button loading={this.state.loading} primary>Submit Loan!</Button>
                </Form>
            </div>
        );
    }
}

export default Loan;