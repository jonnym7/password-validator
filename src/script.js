
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
    
    for (let i = 0; i < pswd.length; i++) {
        if (pswd[i] == Number(pswd[i])) {
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

    for (let i = 0; i < pswd.length; i++) {
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