import web3 from './web3';
import Contract from '../artifacts/contracts/borrowRequest.sol/BorrowRequest.json';

const instance = new web3.eth.Contract(
    Contract.abi,
    '0xf699930B51816ce52bF34c35F84A437AD123c04C'
);

export default instance;