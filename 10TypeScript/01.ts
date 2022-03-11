let a: string = "hello";
let b: string = "world";
console.log(a + b);

let c: number = 100;
console.log(c);

let c2: number = 2.2;
console.log(c2);

let c3: number = 0x1102;
console.log(c3);

let d: boolean = true;
console.log(d);

let f: object = {"name": "lisi", "age": 22};
console.log(f);

// let color: 'red' | 'yellow' | 'blue'
// console.log(color)

let g: any;
g = 1;
console.log(g);
g = "Hello,Typescript!";
console.log(g);

let h: [string,number] = ["hello",1]
console.log(h[0])
console.log(h[1])

let i: number[] = [1,2,3,4]
console.log(i)
let i2: Array<number> = [5,6,7,8]
console.log(i2)

enum Color {
    Red = 1,
    Yellow,
    Blue
}

let j:Color = Color.Red
let j2:Color = Color.Yellow
let j3:Color = Color.Blue
console.log(j)
console.log(j2)
console.log(j3)

// 字面量，限制字面量的值
let k: "male" | "female" = "male"
console.log(k)

let l: unknown = 19
console.log(l)
l = "Hello,World"
console.log(l)

// 类型断言
let m: string = <string>l
console.log(m)

let n: string = l as string
console.log(n)

let o: void = undefined
console.log(o)

function log(message: string) :void{
    console.log(message)
}

console.log("Hello,Typescript!!!!")

function error(message: string) :never{
    throw new Error(message)
}

error("Error Occured!!!")
