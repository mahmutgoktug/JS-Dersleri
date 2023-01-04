let username = prompt("Kullanici Adinizi Giriniz:")
// eger kullanici bilgisi varsa ekrana ismini yazdır 
// eger (username.length > 0) {console.log(username)} degilse {console.log("Bilgi Yok")}
// if (username.length > 0) {console.log(username)} else {console.log("Bilgi Yok")}

if (username) {  //if kismi her zaman dogru ise calisir
    console.log(`Kullanici Bilginiz ${username}`)
} else {
    console.log("Bilgi Yok")
}

