// 面向对象
class Person {
    private _name: string;
    private _age: number;
    static PI = 3.14;

    /*constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }*/

    constructor() {
    }

    // 属性存取器
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    sayInfo(): void{
        console.log(`My name is ${this._name},My age is ${this._age}`)
    }


}

let person = new Person();
person.name = "lisi"
person.age = 22
console.log(person)
console.log(Person.PI)
person.sayInfo()

