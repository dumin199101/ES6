//class类声明，不支持变量提升
class Person{
    constructor(){
        this.name = 'lisi'
        this.age = 22
    }
    say(){
       console.log(this.name+'---'+this.age);
    }
}

var p = new Person();
p.say();