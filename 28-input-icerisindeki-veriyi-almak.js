// INPUT içerisindeki değeri(value) almak:
// HTML'de muhakkak input'un "name" ismi olmak zorunda..

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() // default işlemi engelledik..
    console.log("islem gerceklesti")
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)
}