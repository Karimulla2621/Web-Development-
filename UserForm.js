const formEL = document.getElementById("form");
const name = document.getElementById("name");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const Date = document.getElementById("Date");
const cardEL = document.getElementById("User-card");
formEL.addEventListener("submit", (event) => {
    event.preventDefault();
    CardArr.push(User);
    const newUser = cardsArr(cardArr.length - 1);

    const newDiv = document.createElement("Div");
    newDiv.classList.add("newCard");

    const cardName = document.createElement("h1");
    const Password = document.createElement("Password");
    const Email = document.createElement("Email");
    const Date = document.createElement("Date");

    cardName.textContent=newUser.name;
    EmailCard.textContent= newUser.Email;
    PasswordCard.textContent=newUser.Password;
    DateCard.textContent=newUser.Date;

    newDiv.appendChild(cardName);
    newDiv.appendChild(EmailCard);
    newDiv.appendChild(DateCard);
    newDiv.appendChild(Password);
    cardEL.appendChild(newDiv);
});
const user = {
    name: "No Name",
    email: "No Email",
    Password: "No Password",
    Date: "No date"
};
nameEL.addEventListener("change", (event) => {
    user.name = event.target.value;

})
EmailEL.addEventListener("change", (event) => {
    user.Email = event.target.value;

})
PasswordEL.addEventListener("change", (event) => {
    user.Password = event.target.value;

})
DateEL.addEventListener("change", (event) => {
    user.Date = event.target.value;

});


