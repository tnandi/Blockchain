const SHA256 = require('node_modules/çrypto-js/sha256.js');

class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "03/12/2017", "Genesis Block begins now", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for(let i =1;i<this.chain.length; i++)
        {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

test();

function newFunction() {
    let tnanLedger = new Blockchain();
    tnanLedger.addBlock(new Block(1, "03/12/2017", { message: "Hello this is a blockchain" }));
    tnanLedger.addBlock(new Block(2, "04/12/2017", { message: "Earth calling Huston" }));
    console.log(JSON.stringify(tnanLedger, null, 4));
}
