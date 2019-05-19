let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => r.json()).then(r => console.log(r.results))}
let users = fetchUsers()



users.map(user => {

var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode(user.name.first); node.appendChild(textnode);                             
document.getElementById("myList").appendChild(node);  

})