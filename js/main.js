let logout = document.querySelector(".logout");
let allExList = document.querySelector(".all-expense__list");
let allInList = document.querySelector(".all-income__list");
let elRecentList = document.querySelector(".recent__list");
let elHistoryList = document.querySelector(".history__list");



let localData = localStorage.getItem("token");
if(!localData) {
    window.location.replace("register.html");
}

logout.addEventListener("click", (evt)=>{
    evt.preventDefault();
    
    localStorage.removeItem("token");
    window.location.replace("login.html");
});

let elTotalIncome = document.querySelector(".total-income");


let elListRecent = document.querySelector(".recent__list");

function render(array, node) {
    node.innerHTML = '';
    array.forEach(item => {
        // console.log(item);
        node.innerHTML += `
        <li class="recent__items">
        <h4 class="recent__subtitle">Title : ${item.title}</h4>
        <p class="recent__amount">Amount : ${item.amount}</p>
        <p class="recent__category">Category : ${item.category}</p>
        <p class="recent__description">Description : ${item.description}</p>
        <p class="recent__date">Date : ${item.date}</p>
        </li>
        `
    });
}

function renderExpenseBack(url) {
    fetch(url, {
        method:"GET",
        headers: {
            token : localData,
        },
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data); 
        if(data.length) {
            
            render(data, allExList)
        }
    });
}

function renderIncomeBack(url) {
    fetch(url, {
        method:"GET",
        headers: {
            token : localData,
        },
    })
    .then(res => res.json())
    .then(data => {
        console.log(data); 
        if(data.length) {
            render(data, allInList);
        }
    });
}

function renderIncomeBack(url) {
    fetch(url, {
        method:"GET",
        headers: {
            token : localData,
        },
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data); 
        if(data.length) {
            render(data, elRecentList)

        }
    });
}

function renderIncomeBack(url) {
    fetch(url, {
        method:"GET",
        headers: {
            token : localData,
        },
    })
    .then(res => res.json())
    .then(data => {
        console.log(data); 
        if(data.length) {
            render(data, elHistoryList)
        }
    });
}

// renderBack('http://localhost:9090/get-incomes');
renderExpenseBack('http://localhost:9090/get-expenses');
renderIncomeBack('http://localhost:9090/get-incomes');


let elFormIncome =document.querySelector(".form__income");
let elTitle = document.querySelector(".income__title");
let elAmout = document.querySelector(".income__amount");
let elCategory = document.querySelector(".income__category");
let elDescription = document.querySelector(".income__description");
let elDate = document.querySelector(".income__date");

// console.log(elDate);

elFormIncome.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    console.log(elTitle.value, elAmout.value, elCategory.value, elDescription.value, elDate.value);
    
    fetch("http://localhost:9090/add-income", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        token: localData,
    }, 
    body: JSON.stringify({ 
        "title": elTitle.value,
        "amount": elAmout.value,
        "category": elCategory.value, 
        "description": elDescription.value,
        "date": elDate.value,
    })
}).then(res => res.json())
.then((data)=>{
    console.log(data);
})
.catch(error => console.log(error))
})

let elExpenseFormExpense =document.querySelector(".form__expense");
let elExpenseTitle = document.querySelector(".expense__title");
let elExpenseAmout = document.querySelector(".expense__amount");
let elExpenseCategory = document.querySelector(".expense__category");
let elExpenseDescription = document.querySelector(".expense__description");
let elExpenseDate = document.querySelector(".expense__date");

// console.log(elDate);

elExpenseFormExpense.addEventListener("submit", (evt)=>{
    evt.preventDefault();

    console.log(elExpenseTitle.value, elExpenseAmout.value, elExpenseCategory.value, elExpenseDescription.value, elExpenseDate.value);
    
    fetch("http://localhost:9090/add-expense", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        token: localData,
    }, 
    body: JSON.stringify({ 
        "title": elExpenseTitle.value,
        "amount": elExpenseAmout.value,
        "category": elExpenseCategory.value, 
        "description": elExpenseDescription.value,
        "date": elExpenseDate.value,
    })
}).then(res => res.json())
.then((data)=>{
    console.log(data);
})
.catch(error => console.log(error))
})



let elMainBtn = document.querySelector(".main-page");
let elHistoryBtn = document.querySelector(".history-page");
let elIncomesBtn = document.querySelector(".income-page");
let elExpensesBtn = document.querySelector(".expense-page");

let elMainPage = document.querySelector(".main");
let elHistoryPage = document.querySelector(".history");
let elIncomePage = document.querySelector(".incomes");
let elExpensePage = document.querySelector(".expenses");

elMainBtn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    elMainPage.classList.remove("visually-hidden");
    elHistoryPage.classList.add("visually-hidden");
    elIncomePage.classList.add("visually-hidden");
    elExpensePage.classList.add("visually-hidden");
})

elHistoryBtn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    elMainPage.classList.add("visually-hidden");
    elHistoryPage.classList.remove("visually-hidden");
    elIncomePage.classList.add("visually-hidden");
    elExpensePage.classList.add("visually-hidden");
})

elIncomesBtn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    elMainPage.classList.add("visually-hidden");
    elHistoryPage.classList.add("visually-hidden");
    elIncomePage.classList.remove("visually-hidden");
    elExpensePage.classList.add("visually-hidden");
})

elExpensesBtn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    elMainPage.classList.add("visually-hidden");
    elHistoryPage.classList.add("visually-hidden");
    elIncomePage.classList.add("visually-hidden");
    elExpensePage.classList.remove("visually-hidden");
})
