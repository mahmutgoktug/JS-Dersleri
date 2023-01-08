
let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Array: sona öge/eleman eklemek -> push
items.push(50)
console.log("50 : ", items)

// Array: başa öge/eleman eklemek -> unshift
items.unshift(5)
console.log("5 : ", items)

// Array: sondaki ögeyi çıkartmak -> pop
let lastItem = items.pop() // son elemanı lastItem içerisine ekledik
console.log("lastItem : ", lastItem, ", items : ", items)

// Array: baştaki ögeyi çıkarmak -> shift
let firstItem = items.shift() // ilk elemanı firstItem içerisine ekledik
console.log("firstItem : ", firstItem, ", items : ", items)

// Array içindeki bir ogenin bilgisinin değiştirilmesi:

// ilk ögenin değiştirilmesi
items[0] = 5;
console.log(items)

// son ögenin değiştirilmesi
items[items.length - 1] = 1000
console.log(items)