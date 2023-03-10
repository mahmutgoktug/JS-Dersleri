// Çok kullanılan Array(dizi) metotları ve Array içinde Array

let items = [1, 2, 3, 4, 5]

// Array içinde Array
let femaleUsers = ["Tugba", "Merve", "Ayse"]
let maleUsers = ["Ejder", "Goktug", "Ahmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length)
console.log(items[0][0])

// Array içerisinden öge ayırmak -> splice(pos, item?)
let newItems = items.splice(1, 5)

console.log("newItems: ", newItems)
console.log("items: ", items)

//Array içerisindeki ögenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log( items.indexOf("ipsum") )

// Array kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop()
console.log("copyItems", copyItems)
console.log("items", items)

console.log("kopyalandiktan sonraki hali")
copyItems = items.slice() // kopyalama yapti
copyItems.pop()
console.log("copyItems", copyItems)
console.log("items", items)

// Iki Array bilgisini birleştirmek -> [...ES6, ...ES6]
let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama işlemi
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapısını birleştirmek
console.log(allUsers)

// Array içerisindeki bilgiyi string'e çevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// Istediğimiz Index bilgisine öge eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Goktug")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)