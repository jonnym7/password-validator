
//validate 8 characters
function isLongEnough () {
    let minLength = 8;
    let pswd = document.getElementById("password").value
    
    if (pswd.length >= minLength) {
        longEnough.classList.remove("invalid");
        longEnough.classList.add("valid");
    } else {
        longEnough.classList.remove("valid");
        longEnough.classList.add("invalid");
    }
}

// validate 1 lowercase
function hasLowerCase () {
    let pswd = document.getElementById("password").value

    if (pswd.toUpperCase() != pswd ) {
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    } else {
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }
}

// validate 1 capital
function hasUpperCase () {
    let pswd = document.getElementById("password").value
    
    if (pswd.toLowerCase() != pswd ) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
}

// validate 1 number
function hasNumber () {
    let pswd = document.getElementById("password").value
    
    for (let i = 0; i < pswd.length; i++) {//because you are looping through, if the password does not end in a number then the class list will have invalid.
        if (pswd[i] == Number(pswd[i])) {//The last character would hit the else statement. Therefore we want to add a break in the logic for the first if (in my refactor I did a return as that will end a loop)
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }
    }
}

// validate 1 special character
function hasSpecial () {
    let pswd = document.getElementById("password").value
    let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "{", "}", ":", ";", "?", ">", "<", ".", "/", "|",]

    for (let i = 0; i < pswd.length; i++) {//same issue as with the number function
        if (specialChars.indexOf(pswd[i]) >=0 ) {
            special.classList.remove("invalid");
            special.classList.add("valid");
        } else {
            special.classList.remove("valid");
            special.classList.add("invalid");
        }
    }
}

function validate () {
    let lengthEl = document.getElementById("longEnough");
    let isValidLength = lengthEl.classList.contains("valid")
    
    let lowerEl = document.getElementById("lower");
    let isValidLower = lowerEl.classList.contains("valid")

    let capitalEl = document.getElementById("capital");
    let isValidCapital = capitalEl.classList.contains("valid")

    let numberEl = document.getElementById("number");
    let isValidNumber = numberEl.classList.contains("valid")

    let specialEl = document.getElementById("special");
    let isValidSpecial = specialEl.classList.contains("valid")

    if (isValidLength && isValidLower && isValidCapital && isValidNumber && isValidSpecial) {
        console.log("Valid");
    } else {
        alert ("Please enter a valid password")
    }

}


/* Here is my example of your code refactored to remove some of the redundancies. There was a change made to a line in the html if you want to reference.

function validate () {
    let password = document.getElementById("password").value
    if (isLongEnough(password) && hasLowerCase(password) && hasUpperCase(password) && hasNumber(password) && hasSpecial(password)) {
        alert("Password is valid");
    } else {
        alert ("Please enter a valid password")
    }
}

//validate 8 characters
function isLongEnough (pswd) {
    let minLength = 8;
    if (pswd.length >= minLength) {
        changeClass(longEnough, true)
        return true
    } else {
        changeClass(longEnough, false)
    }
}

// validate 1 lowercase
function hasLowerCase (pswd) {
    if (pswd.toUpperCase() != pswd ) {
        changeClass(lower, true)
        return true
    } else {
        changeClass(lower, false)
    }
}

// validate 1 capital
function hasUpperCase (pswd) {
    if (pswd.toLowerCase() != pswd ) {
        changeClass(capital, true)
        return true
    } else {
        changeClass(capital, false)
    }
}

// validate 1 number
function hasNumber (pswd) {
    for (let i = 0; i < pswd.length; i++) {
        if (pswd[i] == Number(pswd[i])) {
            changeClass(number, true)
            return true
        } else {
            changeClass(number, false)
        }
    }
}

// validate 1 special character
function hasSpecial (pswd) {
    let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "{", "}", ":", ";", "?", ">", "<", ".", "/", "|",]
    for (let i = 0; i < pswd.length; i++) {
        if (specialChars.indexOf(pswd[i]) >=0 ) {
            changeClass(special, true)
            return true
        } else {
            changeClass(special, false)
        }
    }
}

function changeClass(id, setToValid){
    if (setToValid){
        id.classList.remove("invalid")
        id.classList.add("valid")
    } else{
        id.classList.remove("valid")
        id.classList.add("invalid")
    }
}
*/
