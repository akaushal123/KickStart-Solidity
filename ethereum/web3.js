import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    //we are in browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}else{
    //we are on server or user not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/c5fc891e8ea34bf587ba2a62e430c7c1'
    );
    web3 = new Web3(provider);
}

export default web3;
