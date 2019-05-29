fetchUsers = async () => {
    const users = await fetch('https://randomuser.me/api/?results=10')
                        .then(r => r.json())
                        .then(r => r.results)
    return users
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
        const data = document.createElement('ul')
        const name = document.createElement('li')
        const email = document.createElement('li')

        container.setAttribute('class', 'container')
        photo.setAttribute('class', 'photo')
        data.setAttribute('class', data)

        name.innerHTML = capitalize(user.name.first) + ' ' + capitalize(user.name.last)
        email.innerHTML = 'Email: ' + user.email

        photo.style.background = `url(${user.picture.medium})`

        container.appendChild(photo)
        container.appendChild(data)
        data.appendChild(name)
        data.appendChild(email)
        wrapper.appendChild(container)

    })

}

showUserNames()