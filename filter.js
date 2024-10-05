const numbers = [1, 2, 3, 5, 6, 7]
const players = [75, 65, 67, 72, 55, 59]
// const selected = players.filter(p => p > 70)
// const selected = players.filter(p => p > 60)
const selected = players.filter(p => p > 50)
// console.log(selected)

const friends = ['rakib', 'sakib', 'rokib', 'sokina', 'joshna']
const oddNumbers = friends.filter(friend => friend.length % 2 === 1)
console.log(oddNumbers)