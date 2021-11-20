import React from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Contract from '../ethereum/contract';

class Loan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loanAmount: 0,
            dueDate: 0,
            interestRate: 0,
            payment: 0,
            errorMessage: '',
            loading: false,
            loanSuccess: false
        }
    }

    onSubmit = async (event) => {
        try {
            const accounts = await web3.eth.getAccounts();
            const { loanAmount, dueDate, interestRate, payment } = this.state;
            console.log(
                loanAmount, dueDate, interestRate, payment
            )

            Contract.methods.createLoan(loanAmount, dueDate, interestRate, payment).send({
                from: accounts[0]
            });

            this.setState({loanSuccess: true});

        } catch (err) {
            this.setState({errorMessage: err.errorMessage, loading: false });
        }
    }

    loanInformation = async () => {
        try {
            const loan = Contract.methods.loan.call();
            return loan;
        } catch (err) {
            this.setState({errorMessage: err.errorMessage, loading: false });
        }
    }

    render() {

        let loanSuccess = undefined;
        if(this.state.loanSuccess) {
            loanSuccess = this.loanInformation;
            console.log(loanSuccess);

            return(
                <div>
                    <h4>Your Loan was generated successfully! </h4>
                    <p>Here are the details</p>
                    <p>Balance: {loanSuccess[0]}</p>
                    <p>Remaining Debt: {loanSuccess[1]}</p>
                    <p>Pay Back Date: {loanSuccess[2]}</p>
                    <p>Monthly Payment: {loanSuccess[3]}</p>
                    <p>Lender Address: {loanSuccess[4]}</p>
                    <p>Borrower Address: {loanSuccess[5]}</p>
                </div>
            )
        }

        return (
            <div>
                <h2> Create a loan</h2>
                <p> Note: This transaction requires the Parental account! </p>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Loan Amount</label>
                        <Input 
                            label="Dollars"
                            labelPosition="right"
                            value={this.state.loanAmount}
                            onChange={(event) => this.setState({ loanAmount: event.target.value })}
                        />
                        <label>Due Date</label>
                        <Input 
                            label="UTC"
                            labelPosition="right"
                            value={this.state.dueDate}
                            onChange={(event) => this.setState({ dueDate: event.target.value })}
                        />
                        <label>Interest Rate</label>
                        <Input 
                            label="%"
                            labelPosition="right"
                            value={this.state.interestRate}
                            onChange={(event) => this.setState({ interestRate: event.target.value })}
                        />
                        <label>Payment</label>
                        <Input 
                            label="Monthly"
                            labelPosition="right"
                            value={this.state.payment}
                            onChange={(event) => this.setState({ payment: event.target.value })}
                        />
                        <Message error header="Oops!" content={this.state.errorMessage}/>
                        <Button loading={this.state.loading} primary>Submit Loan!</Button>
                    </Form.Field>
                </Form>

                {loanSuccess}
                
            </div>
        );
    }
}

export default Loan;