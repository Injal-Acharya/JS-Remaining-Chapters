//Local storage
localStorage.setItem("name", "injal")   //syntax: localStorage.setItem('key', 'value')
let key, value
key = prompt("Enter the key:")
value = prompt("Enter the value:")
localStorage.setItem(key, value)
// console.log(localStorage)
console.log(localStorage.getItem('namaiwa'))
localStorage.removeItem('null')
localStorage.clear()


//Session storage
sessionStorage.setItem('hello', 'world')
sessionStorage.setItem(key, value)
console.log(sessionStorage.getItem(key))


//Storage events