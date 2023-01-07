// FORM SUBMIT:

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() // default işlemi engelledik..
    console.log("islem gerceklesti")
}