const numbers = [12, 10, 8, 15, 17]

const doubleIt = numbers.map( n => n * 2 )
// console.log(doubleIt)

const fiveBonus = numbers.map( num => num + 5 )
// console.log(fiveBonus)

const friends = ['rakib', 'sakib', 'rokib', 'joy']
const lengths = friends.map( frnd => frnd.length )
// console.log(lengths)
const firstLetter = friends.map( friend => friend[1] )
console.log(firstLetter)