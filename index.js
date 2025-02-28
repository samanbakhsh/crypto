const GENESIS_DATA = require('./config');
class Block {
    constructor({ timeStamp, lastHash, hash, data }) {
        this.timeStamp = timeStamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
    static genesis(){
        return new this(GENESIS_DATA);
    }
    static mineBlock({lastBlock,data}){
        return new Block({
            timeStamp: Date.now(),
            lastHash: lastBlock.hash,
            data,
        })
    }
}

module.exports = Block;

