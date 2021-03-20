import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const address = '0xa9c024913baa5e9fAF98210499aCe7b85A539D39';
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    address
);

export default instance;
