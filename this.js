class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping Now ${this.name}`)
    }
}
const kodom = new Person('kodom ali', 21)
console.log(kodom)