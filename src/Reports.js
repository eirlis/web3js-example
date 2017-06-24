import Web3 from 'web3';
import fs from 'fs';
import jsonik from './sol.json';

//TODO implement contract logic
class Reports {

    constructor(){
        var web3 = new Web3();
        web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
        alert(jsonik.value);

    }

}

export default Reports;