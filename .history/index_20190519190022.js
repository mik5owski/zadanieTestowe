let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => r.json()).then(r => console.log(r.results))}
let users = fetchUsers()


    let name = document.createElement(div)
    name.innerHTML = user.name.first
    document.appendChild(name)
