let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => r.json())
