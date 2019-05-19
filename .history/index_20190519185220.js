let fetchUsers = () => {fetch('https://randomuser.me/api/
10')
       .then(r => r.json())}

  console.log(fetchUsers())