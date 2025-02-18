const cryptoHash = require('./crypto-hash');
describe('crypto hash testing',()=>{
    const samanbakhsh = cryptoHash('samanbakhsh');
    it('testing crypto hash whith samanbakhsh',()=>{
    expect(samanbakhsh).toEqual('45ce446a9fa227252dcc1f53a7cbc86f3bbb885e0a4e982dfec6c25968e6eaa6')
    })
    it('order testing',()=>{
        expect(cryptoHash('one','two','three')).toEqual(cryptoHash('three','two','one'))
        })
})