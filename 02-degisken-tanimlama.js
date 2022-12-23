//**************************************** let ve const ile degisken tanimlama ******************************

// var ile degisken tanimlamak:
//var serverName = "api.kodluyoruz.org"
//console.log(serverName)



// let ile degiskeni bos tanimlamak:
let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak:
serverName = "https://kodluyoruz.org"
console.log(serverName)


// let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:
/* HATALI KULLANIM
console.log(fullName)
let fullName = "Goktug Celikkaya";
*/
let fullName = "Goktug Celikkaya";

// let ile tanimlanan degisken icindeki bilgiyi degistirmek:

fullName = "Lorem Ipsum Dolor";
console.log(fullName)

// birlestirme veya ekleme islemi:
fullName + "Yeni Eklenen Bilgi" // acaba eklendi mi???
console.log(fullName + " Test Bilgisi") // Ekle ve goster ama degiskene eklemedik

fullName = fullName + " Yeni Bilgi"
fullName = "2: Bilgi : " + fullName

fullName = "Sifirlandi"
fullName += " ve Yeni Bilgi Eklendi"
console.log(fullName)

// const ile degiskeni bos tanimlamaya calismak : ( :
// const serverPassword; // sadece degisken tanimlandi ama ici bos ??

// const ile degiskeni tanimlamak:
const SERVER_PASSWORD = "Hello World! "
console.log(SERVER_PASSWORD)

//SERVER_PASSWORD = "1234"
//console.log(SERVER_PASSWORD)



// bir şey değişecekse "let" ile tanımlıyoruz eğer değişmicekse "const" ile tanımlıyoruz..
