"use strict";

window.onload = () => {
    const theButton = document.getElementById("theButton");
    theButton.onclick = doSomethingElse;
}

function doSomethingElse(){
   
    // fetches all users and places their names and emails
// in a table
let table = document.getElementById("userTable");
fetch("http://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(data => {
 for(let i=0; i<data.length; i++) {
//  let row = table.insertRow(-1);
//  let cell1 = row.insertCell(0);
//  let cell2 = row.insertCell(1);
//  cell1.innerHTML = data[i].name;
//  cell2.innerHTML = data[i].email;
 }

 })
 .catch(err => {
    console.log("there was an error")

    document.getElementById("output").innerHTML = "There was an error!" +err.message

    console.log(err);

    
 })


}
function doAnotherThing(){
    // Create JSON object to include in the request body
let bodyData = {
    id: document.getElementById("stuIdField").value,
    name: document.getElementById("stuNameField").value,
    classification:
    document.getElementById("stuClassField").value,
   }
   // Send the request
   fetch("http://www.some-url.com/api/students", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {"Content-type":
    "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => {
    // If the POST finishes successfully, display a message
    let confirmationMessage =
    document.getElementById(confirmationMessage);
    confirmationMessage.innerHTML = "New student added";
    })
    .catch(err => {
    // If the POST returns an error, display a message
    let confirmationMessage =
    document.getElementById(confirmationMessage);
    confirmationMessage.innerHTML = "Unexpected error";
    });
}

function doSomething(){
    fetch(endpointUrl, {
        method: "POST",
        body: bodyData,
        headers: {"Content-type":
        "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => {
        // If the POST finishes successfully, ...
        })
        .catch(err => {
        // If the POST returns an error, ...
        });

}