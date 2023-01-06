// https://www.w3schools.com/jsref/dom_obj_event.asp


let greeting = document.querySelector("#greeting")


// greeting.addEventListener("click", domClick)

// function domClick(){
//    console.log("tiklandi")
//    console.log(this.innerHTML = "Tiklandigi icin rengi ve yazi degisti")
//    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
//}

greeting.addEventListener("mouseover", domClick)

function domClick(){
    console.log("etkinlik denetlendi")
    console.log(this.innerHTML = "uzerine gelindigi icin rengi degisti")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}