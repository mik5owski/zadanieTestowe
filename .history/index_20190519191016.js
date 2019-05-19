let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => r.json()).then(r => console.log(r.results))}
let users = fetchUsers()



users.forEach(user => ({
console.log(user)
var node = document.createElement("LI");
var textnode = document.createTextNode(user.name.first); 
node.appendChild(textnode);                             
document.getElementById("myList").appendChild(node);  

}))