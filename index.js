// let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
//        .then(r => r.json()).then(r => {
//            console.log(r.results)
//        })
// }

fetchUsers = async () => {
    const users = await fetch('https://randomuser.me/api/?results=10')
                        .then(r => r.json())
                        .then(r => r.results)
    return users
}

logUsers = async () => {
    const users = await fetchUsers()
    console.log(users)
}


logUsers()