//类继承
class Person{
    constructor(){
        this.name = 'lisi';
        this.age = 22;
    }
    say(){
        console.log(this.name+'---'+this.age);
    }
}

class Student extends Person{
    constructor(){
        super();
        this.city = 'beijing';
    }
    eat(){
        console.log('eat')
    }
}

var s = new Student();
s.say();
s.eat();