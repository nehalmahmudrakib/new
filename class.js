const products = [
    {id: 1, name:'Lenovo', price: 65000},
    {id: 2, name:'Lenovo', price: 45000},
    {id: 3, name:'Lenovo', price: 40000},
    {id: 4, name:'Lenovo', price: 150000}
];

// Similar 
class Product{
    country = 'bangladesh'
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product('le le lenovo')
console.log(lenovo)
lenovo.speak('oba kita kou')


// class Teacher{
//     constructor(name, subject){
//         this.name = name;
//         this.subject = subject;
//     }
// }
// const tapan = new Teacher('Tapon Sir', 'Physics')
// console.log(tapan)











class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
}
const rakib = new Teacher('Rakib', 'Coading')
console.log(rakib)