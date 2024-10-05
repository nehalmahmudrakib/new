const products = [
    {id: 1, name:'Lenovo', price: 65000},
    {id: 2, name:'Lenovo', price: 45000},
    {id: 3, name:'Lenovo', price: 40000},
    {id: 4, name:'Lenovo', price: 150000}
];

// Map
const names = products.map(p => p.name)
console.log(names)

// ForEach
products.forEach(p => console.log(p.id))

// Filter
const expensive = products.filter( p => p.price > 50000 )
console.log(expensive)

// Find
const finding = products.find(p => p.price < 50000)
console.log(finding)

// reduce
const sum = products.reduce( (p , c) => p + c.price ,0)
console.log(sum)