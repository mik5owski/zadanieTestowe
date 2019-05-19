let fetchUsers = () => {fetch('https://randomuser.me/api/?results=10')
       .then(r => r.json()).then(r => {
        function updateTableHTML(names) {
            var tableBody = document.getElementById("people"),
                newRow, newCell;
        
            // Reset the table
            tableBody.innerHTML = "";
        
            // Build the new table
            for (var i=0; i < myArray.length; i++) {
                newRow = document.createElement("tr");
                tableBody.appendChild(newRow);
        
                if (myArray[i] instanceof Array) {
                    for (var j=0; j < myArray[i].length; j++) {
                        newCell = document.createElement("td");
                        newCell.textContent = update[i][j];
                        newRow.appendChild(newCell);
                    }
                } else {
                    newCell = document.createElement("td");
                    newCell.textContent = myArray[i];
                    newRow.appendChild(newCell);
                }
            }
        }
       })
       
let users = fetchUsers()



names = users.map(user => user.name.first)

function updateTableHTML(names) {
    var tableBody = document.getElementById("people"),
        newRow, newCell;

    // Reset the table
    tableBody.innerHTML = "";

    // Build the new table
    for (var i=0; i < myArray.length; i++) {
        newRow = document.createElement("tr");
        tableBody.appendChild(newRow);

        if (myArray[i] instanceof Array) {
            for (var j=0; j < myArray[i].length; j++) {
                newCell = document.createElement("td");
                newCell.textContent = update[i][j];
                newRow.appendChild(newCell);
            }
        } else {
            newCell = document.createElement("td");
            newCell.textContent = myArray[i];
            newRow.appendChild(newCell);
        }
    }
}