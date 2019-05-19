let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => r.json()).then(r => console.log(r.results))}
let users = fetchUsers()


                       // Append the text to <li>
document.getElementById("people").appendChild(node);     // Append <li> to <ul> with id="myList"
