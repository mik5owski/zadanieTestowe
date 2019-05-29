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


showUserNames = async () => {
    const users = await fetchUsers()

    users.map(user => {

        const wrapper = document.querySelector('.wrapper')
        const container = document.createElement('div')
        const name = document.createElement('span')

        name.innerHTML = user.name.first + ' ' + user.name.last

        container.appendChild(name)
        wrapper.appendChild(container)

    })

}

showUserNames()
logUsers()