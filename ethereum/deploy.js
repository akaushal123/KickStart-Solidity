const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const mnemonic = 'edit steak lake outside polar stock retire guess gloom finger ring fox';
const linkEndpoint = 'https://rinkeby.infura.io/v3/c5fc891e8ea34bf587ba2a62e430c7c1';

const provider  = new HDWalletProvider(
    mnemonic, linkEndpoint
);

const web3 = new Web3(provider);

const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: `0x${compiledFactory.bytecode}`})
        .send({from: accounts[0]});


    console.log('Contract deployed at ', result.options.address);
};

deploy();

