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

capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
} 

showUserNames = async () => {
    const users = await fetchUsers()

    users.map(user => {

        const wrapper = document.querySelector('.wrapper')
        const container = document.createElement('div')
        const photo = document.createElement('div')
        const name = document.createElement('span')
        const email = document.createElement('div')

        name.innerHTML = capitalize(user.name.first) + ' ' + capitalize(user.name.last)
        email.innerHTML = 'Email: ' + user.email

        photo.style.width = '70px'
        photo.style.height = '70px'
        photo.style.background = `url(${user.picture.medium})`
        container.style.width = '300px'
        container.style.border = '1px solid black'
        container.style.marginBottom = '5px'

        container.appendChild(photo)
        container.appendChild(name)
        container.appendChild(email)
        wrapper.appendChild(container)

    })

}

showUserNames()
logUsers()