
describe('Destructors', function() {

    it('should be able to destructure arrays', function(){
        let x = 5;
        let y = 10;

        [x, y] = [y, x];

        expect(x).toBe(10);
        expect(y).toBe(5);
    });

    it('should be able to assign a destructure from a function return', function(){

        let f = function() { return [10, 20, 30]; }
        let [x, y, z] = f();

        expect(x).toBe(10);
        expect(y).toBe(20);
        expect(z).toBe(30);
    });

    it('should be able to skip the first value from a destructure', function(){

        let f = function() { return [10, 20, 30]; }
        let [, y, z] = f();

        expect(y).toBe(20);
        expect(z).toBe(30);
    });

    it('should let the last unassigned value to be undefined', function(){

        let f = function() { return [10, 20, 30]; }
        let [, y, z, k] = f();

        expect(y).toBe(20);
        expect(z).toBe(30);
        expect(k).toBeUndefined();
    });

    it('should be able to assign a destructor from a returned literal', function(){

        let f = function() { 
            return {
                firstName: "Gosia",
                lastName: "Tkaczyk",
                twitter: '@gosia'
            }; 
        }
        let {firstName: fname, twitter: myTwitter} = f();

        expect(fname).toMatch('Gosia');
        expect(myTwitter).toMatch('@gosia');
    });

    it('should be able to use destructor as function parameters', function(){

        let f = function(url, {data, cache, headers}){
            return data;
        }

        let data = f('http://whatever', {data: "test", cache: false});

        expect(data).toMatch("test");
    });
})