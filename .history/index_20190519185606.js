let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => r.json()).then(r => console.log(r.results))}
fetchUsers()