let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => r.json()).then(r => console.log(r.results))}
let users = fetchUsers()


var nodelist = users.map(user => {
    document.createElement("LI")
    var textnode = document.createTextNode("Water");
}
         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("people").appendChild(node);     // Append <li> to <ul> with id="myList"
