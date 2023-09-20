const employeeCardsContainer = document.getElementById('employee-container');

function fetchEmployeeData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            employeeCardsContainer.innerHTML = ''
console.log(data)
            data.forEach(employee => {
                const card = document.createElement('div')
                card.classList.add('employee-card')
                card.innerHTML = `
            <div class="head-part">
                <div class="avatar">
                LL
                </div>
                <div class="name-container">
                    <h3 class="name">${employee.name}</h3>
                    <h4 class="username">${employee.username}</h4>
                </div>
            </div>
            <div class="contacts-part">
                <div class="email-container">
                    <img src="./asssets/email.svg" alt="icon">
                    <h4 class="email">email: ${employee.email}</h4>
                </div>
                <div class="website-container">
                    <img src="./asssets/website.svg" alt="icon">
                    <h4 class="website">website: ${employee.website}</h4>
                </div>
                <div class="phone-container">
                    <img src="./asssets/call.svg" alt="icon">
                    <h4 class="phone">phone: ${employee.phone}</h4>
                </div>
            </div>
            `;
            employeeCardsContainer.appendChild(card)
            })
        })
        .catch(error => {
            console.log(`Something went wrong: ${error}`)
        })
}

fetchEmployeeData()

setInterval(fetchEmployeeData, 5000)