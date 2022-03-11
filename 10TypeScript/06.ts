// 泛型
// 类上加泛型
class Student<T, K> {
    name: T
    age: K

    constructor(name: T, age: K) {
        this.name = name;
        this.age = age;
    }

    // 函数上加泛型
    say<T1,K1>(s1: T1,s2: K1) :void{
       console.log(s1,s2)
    }
}

let s = new Student<string, number>("张三", 22)
console.log(s.name)
console.log(s.age)
let s2 = new Student<string, string>("王五", "四岁")
console.log(s2.name)
console.log(s2.age)
s.say<string,string>("hello","world")
s.say<number,number>(2,3)


