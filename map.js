const numbers = [2, 5, 8, 10];

function doubleIt (num){
    console.log(num)
    return (num * 2)
}
const doubleIt2 = n => n * 2
const result = numbers.map(doubleIt2)
// console.log(result)
const output = numbers.map(n => n * 2)
console.log('This is Output', output)

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }
// console.log(doubled)