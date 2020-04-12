//原型继承
function Person(){
   this.say=function(){
      console.log(this.name)
   }
}

function Student(){
    this.name = 'lisi';
}

Student.prototype = new Person();

var s = new Student();
s.say();