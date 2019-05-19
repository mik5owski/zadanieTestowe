let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => console.log(r.json()))}

  console.log(fetchUsers())