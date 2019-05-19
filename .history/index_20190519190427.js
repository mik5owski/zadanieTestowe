let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => r.json()).then(r => console.log(r.results))}
let users = fetchUsers()


    let name = document.createElement(div)
    let people = document.getElementById("people")
    let text =document.createTextNode("dupa")
    name.innerHTML = user[0].name.first
    people.appendChild(text)
