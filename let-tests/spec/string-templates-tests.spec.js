
describe('String templates', function(){

    it('should be able to use tags', function() {

        let upper = function(strings, ...values){
            let result = "";
            for(let i = 0; i < strings.length; i++){
                result += strings[i];
                if(i < values.length){
                    result += values[i];
                }
            }
            return result.toUpperCase();
        }

        let [x, y] = [1, 3];
        let result = upper `${x} + ${y} is ${x + y}`;

        expect(result).toBe("1 + 3 IS 4");
        
    });


})