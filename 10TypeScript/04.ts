// 抽象类
abstract class Animal {
    name: string
    age: number
    // 抽象方法没有方法体
    abstract run(): void
    // 抽象类中的普通方法
    eat(): void{
       console.log("吃食物才有力气")
    }
}

class Dog extends Animal{

    constructor(name: string,age: number) {
        super();
        this.name = name
        this.age = age
    }

    // 子类必须实现抽象类中的抽象方法
    run() {
        console.log("狗在跑")
    }
}

let dog = new Dog("小花",22)
dog.run()
dog.eat()