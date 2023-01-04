let price = "100"
let user = "Goktug"

// == esitse
console.log(price == 1)
console.log(price == 100)

// hem degeri hem de turu esitse
console.log(price === 1)
console.log(price === 100)

// != esit degilse
console.log(user != "Goktug")

// < kucukse
console.log(price < 100)

// <= Kucuk veya esitse
console.log(price <= 100)

// > Buyukse
console.log(price > 50)

// >= Buyuk veya esitse
console.log(price >= 100)

// && ve
price = 0
console.log( price > 0 && user != "guest")

// || veya
console.log( price > 0 || user != "guest")

// ! degil (tersi)
user = "guest"
price = 1
console.log( price > 0 && !user == "guest")
