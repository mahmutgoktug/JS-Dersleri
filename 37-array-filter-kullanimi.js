// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

// aktif kullanıcılar ??
const USERS = [
    {fullName: "Mahmut Goktug", isActive: false},
    {fullName: "Halil Ejder", isActive: true},
    {fullName: "Sahure Tugba", isActive: true},
    {fullName: "Alperen Sozen", isActive: false},
]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
const ACTIVE_USERS = USERS.filter( user => user.isActive )
console.log(ACTIVE_USERS)