//冒充继承
function Person(){
    this.say=function(){
        console.log(this.name)
    }
}

function Student(){
    Person.call(this);
    this.name = 'lisi';
}



var s = new Student();
s.say();