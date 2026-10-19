const form = document.getElementById("studentForm");
const result = document.getElementById("result");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) 
{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const major = document.getElementById("major").value;

    if (name === "" || email === "" || age === "" || major === "") 
    {
        alert("Please, fill in all the fields.");
        return;
    }

    message.innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>E-mail:</strong> ${email}<br>
    <strong>Age:</strong> ${age} years old <br>
    <strong>Major:</strong> ${major}<br>
    `;

    result.style.display = "block";

    alert("!Student Registry successfully!");


});
