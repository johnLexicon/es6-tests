
describe('Let keyword scope', function(){

    it('should throw a ReferenceError if outside variable references outside the if scope', function(){
        expect(function() {
            if(true){
                let x = 0;
            }
            console.log(x);
        }).toThrow();
    });
})