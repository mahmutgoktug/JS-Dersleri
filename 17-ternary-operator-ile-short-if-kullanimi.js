let userName = prompt("Kullanici Bilginizi Yaziniz")
let info = document.querySelector("#info")

// ternary kullanimi :
// kosul ? dogruysa : yanlissa

info.innerHTML = `${userName > 0 ? userName : "Kullanici Bilginiz Bulunamadi :( "}`