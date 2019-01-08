
describe('Const keyword', function(){

    it('should throw a TypeError when assigning a new value to the const', function(){
        expect(function(){
            const INTEGER = 10;
            INTEGER = 11;
            console.log(INTEGER);
        }).toThrow();
    });
})