import web3 from './web3';
import Contract from '../artifacts/contracts/borrowRequest.sol/BorrowRequest.json';

const instance = new web3.eth.Contract(
    Contract.abi,
    '0xd9145CCE52D386f254917e481eB44e9943F39138'
);

export default instance;