document.getElementById("userName").addEventListener("click", userName);

function userName() {
    let name;
    name = prompt("What is your name?")
    document.write(`Hello ${name}, thank you for visiting my website!`);
}

document.getElementById("userAge").addEventListener("click", userAge);

function userAge() {
    let age;
    let ageNumber;
    age = prompt("How old are you?");
    ageNumber = Number(age);
    if (ageNumber < 18) {
        document.write("Sorry, users must be at least 18 years old.");
    } else if (ageNumber > 35) {
        document.write("Sorry, users must be between the ages of 18 and 35 years old.");
    } else {
        document.write("Welcome to my website! You meet the age requirement.");
    }
}