// TEMEL KURALLAR :
// 1: bir fonksiyon birden fazla parametre alabilir veya hiç almayabilir.
// 2: bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir.
// 3: mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir.


let firstName = "Lorem"

function greetings(firstName="", lastName="") { // default parametre alıyor..
   // console.log(`Merhaba ${firstName ? firstName : ""}`)
   // console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
} 

console.log(firstName) // değişken 
greetings() // fonksiyona parametre göndermedik ??
greetings("Parametre")

function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" // ????
console.log(greetingsInfo)

function domIdWriteInfo(id, info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let hmtlInfo = `<span style="color: red">Color REDDDD</span>`

domIdWriteInfo('greeting', hmtlInfo)
domIdWriteInfo('info', greetings2("Lorem", "Ipsum"))





