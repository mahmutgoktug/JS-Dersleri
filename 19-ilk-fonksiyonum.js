function helloWorld() {
    console.log("Hello World")
}

function hello() {
    console.log("Merhaba")
    helloWorld
}

// hata alabiliriz..

function userCheck() {
   if(userName && age >= 18){
        info.innerHTML = "Ehliyet alabilirsiniz."
    } else if (!userName){
        info.innerHTML = "Kullanici Adiniz Yok"
    } else if ( !(age >= 18) ){
        info.innerHTML = "Yas Bilginiz Yok veya 18 Yaşindan Kucuksunuz"
    }
}

hello()  //çalıştır