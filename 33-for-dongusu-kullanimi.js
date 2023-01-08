// for ( [başlangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) {
// yapılacak işlem
// } 

let users = ["Lorem", "Ipsum", "Dolor", ]

// for (index = 0; index < 10; index++) {
//     console.log(index)
// }

// let index = 0

// for (; index < 10; index++) {
//     console.log(index)
// }

const userListDOM = document.querySelector('#userlist')

for (index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}