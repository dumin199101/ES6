// 接口
interface Sporter {
    run(): void;
    jump(): void;
}

class Student implements Sporter {

    jump(): void {
        console.log("运动员跳高")
    }

    run(): void {
        console.log("运动员跑步")
    }

}

let s = new Student()
s.jump()
s.run()