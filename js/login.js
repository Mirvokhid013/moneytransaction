let localData = localStorage.getItem("token");

if(localData) {
    window.location.replace("index.html");
}

let elForm = document.querySelector(".login__form");
let elUserEmail = document.querySelector(".email");
let elUserPassword = document.querySelector(".password");


elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    login(elUserEmail.value, elUserPassword.value)
    // console.log(elUserName.value, elUserEmail.value, elUserPhone.value, elUserPassword.value);
})

function login(email, password) {
    fetch("http://localhost:9090/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        }, 
        body: JSON.stringify({ 
             email,
             password,
        })
    }).then(res => res.json())
    .then((data)=>{
        console.log(data);
        if(data.token) {
            localStorage.setItem("token", data.token);
            window.location.replace("index.html");
        }
    })
    .catch(error => console.log(error))
}