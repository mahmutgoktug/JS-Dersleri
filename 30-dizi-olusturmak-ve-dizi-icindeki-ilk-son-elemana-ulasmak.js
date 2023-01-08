// array - dizilerle çalışmak 


// Array oluşturmak
let domain = "goktug"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // Boş liste

// Array içerisindeki eleman/oge sayısını öğrenmek
console.log(
    items.length // array içindeki öge sayısı
)

document.querySelector('#info').innerHTML = items.length

// Array içindeki ilk elemanın çağrılması
console.log( items[0] )

// Array içindeki son elemanın çağrılması
console.log( items[items.length - 1] )

// Array içindeki orta elemanın çağrılması
console.log(
    "ortadaki :",
    items[ Math.floor(items.length / 2) ]
)

// değişken içindeki bilginin Array olup olmadğını kontrol edilmesi
console.log(
    typeof(items) // object olarak çıktı veriyor
)

console.log(
    Array.isArray(items)
)

// hangileri isArray -> True verir ?

console.log("[] : ", Array.isArray( [] ) ) // True
console.log("1 : ", Array.isArray( 1 ) ) // False
console.log("true : ", Array.isArray( true ) ) // False
    
