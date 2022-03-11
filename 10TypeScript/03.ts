// 继承
class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    run() :void{
        console.log("Animal中的run方法")
    }

    eat() :void{
        console.log("Aminal中的eat方法")
    }


}

class Dog extends Animal {

    color: string

    constructor(name,age,color) {
        super(name,age);
        this.color = color
    }

    bark() :void{
        console.log(`${this.name}在狂吠,它今年${this.age}岁了,它的颜色是：${this.color}`)
    }
    // 方法重写
    run() :void{
        console.log("Dog中的run方法")
        //子类调用父类方法
        super.eat()
    }
}

let dog = new Dog("旺财",1,"黑色")
dog.bark()
dog.run()
