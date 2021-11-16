import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    window.ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://eth-ropsten.alchemyapi.io/v2/euVbr1CI_Tbnbo2ITg69gQgdN2wtoqez'
    );
    web3 = new Web3(provider);
}

export default web3;