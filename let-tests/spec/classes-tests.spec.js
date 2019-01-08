
describe('Class', function(){

    it('should create an instance of an empty class signature', function(){

        class Person {

        }

        let p = new Person();

        expect(p).not.toBeUndefined();
    });

    it('should return the corresponding name for each instance', function(){

        class Person {
            constructor(name){
                this._name = name;
            }

            getName(){
                return this._name;
            }
        }

        let p = new Person("kalle");

        expect(p.getName()).toMatch("kalle");
    });

    it('should be able to use getters and setters', function(){

        class Person {

            get name(){
                return this._name
            }

            set name(newValue){
                this._name = newValue;
            }
        }

        let p = new Person();
        p.name = "Gosia";
        let p2 = new Person();
        p2.name = "Krolik";

        expect(p.name).toMatch("Gosia");
        expect(p2.name).toMatch("Krolik");
    });

    it('should be able to use inheritance', function(){

        class Person {

            get name(){
                return this._name
            }

            set name(newValue){
                this._name = newValue;
            }
        }

        class Employee extends Person {
            doWork(){
                return `${this._name} is working!`
            }
        }

        let e = new Employee();
        e.name = "John";
        expect(e.doWork()).toMatch("John is working!");
    });

    it('should be able to use super for calling superclass contructor', function(){

        class Person {

            constructor(name){
                this._name = name;
            }

            get name(){
                return this._name
            }
        }

        class Employee extends Person {

            constructor(name, title){
                super(name);
                this._title = title;
            }

            get title(){
                return this._title;
            }

            doWork(){
                return `${this._name} is working!`
            }
        }

        let e = new Employee("John", "garbage man");
        expect(e.doWork()).toMatch("John is working!");
    });

})