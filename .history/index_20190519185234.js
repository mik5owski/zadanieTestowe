let fetchUsers = () => {fetch('https://randomuser.me/api/10')
       .then(r => console.log(r.json()))}
