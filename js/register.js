let localData = localStorage.getItem("token");

if(localData) {
    window.location.replace("index.html");
}

let elRBtn = document.querySelector(".register__btn");
let elForm = document.querySelector(".register__form");
let elLName = document.querySelector(".last_name");
let elFName = document.querySelector(".first_name");
let elEmail = document.querySelector(".email");
let elPassword = document.querySelector(".password");
let elAge = document.querySelector(".age");

elForm.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    register("http://localhost:9090/register", elLName.value, elFName.value, elEmail.value, elPassword.value, elAge.value);
    console.log(elLName.value, elFName.value, elEmail.value, elPassword.value, elAge.value);
})

function register(url, last_name, frist_name, email, password,age) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        }, 
        body: JSON.stringify({ 
            last_name,
            frist_name,
            email,
            password,
            age,
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