const Block = require('./index');
const GENESIS_DATA = require('./config');

describe("Block",()=>{
    const timeStamp = 'a-data';
    const lastHash='foo-hash';
    const hash='boo-hash';
    const data = ['blockchain','data'];
    const block = new Block({
        timeStamp,
        lastHash,
        hash,
        data}
    )
    it('Creating an object', ()=>{
        expect(block.timeStamp).toEqual(timeStamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
        
    })
    describe('genesis()',()=>{
        const genesisData = Block.genesis();
        it('creating a new genisis object',()=>{
            expect(GENESIS_DATA.timeStamp).toEqual(genesisData.timeStamp);
            expect(GENESIS_DATA.lastHash).toEqual(genesisData.lastHash);
            expect(GENESIS_DATA.hash).toEqual(genesisData.hash);
            expect(GENESIS_DATA.data).toEqual(genesisData.data);
        })
    })
    describe('mineBlock',()=>{
        const lastBlock = Block.genesis();
        const data = "salam";
        const mineBlockData = Block.mineBlock({lastBlock,data});
        it('checking type of mineBlockData',()=>{
            expect(mineBlockData instanceof Block).toEqual(true);
        })
        it('checking equilty of lastblock.hash and mineBlockData.lasthash',()=>{
            expect(mineBlockData.lastHash).toEqual(lastBlock.hash);
        })
        it('checking equilty of data and mineBlockData.data',()=>{
            expect(data).toEqual(mineBlockData.data);
        })
        it('checking existance of mineBlockData.timeStamp',()=>{
            expect(mineBlockData.timeStamp).not.toEqual(undefined);
        })
    })
})