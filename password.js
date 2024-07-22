let symbols = "!@#$%^&*()_+-=?/>.<,\"':;][}{\|~`"

// I did not check the length of the actual password and the symbols (are they letters or numbers) based on your description

let actualPassword = prompt("Enter your password: ") // You can delete the prompt and hard code the password here

let candidatePassword = ""

let count = 0

for (let i = 0; i < actualPassword.length; i++){
    for (let j = 0; j < symbols.length; j++) {
        if (actualPassword[i] === symbols[j]){
            candidatePassword += actualPassword[i]
            count +=1
            break
        }
        count += 1
        
    }
}

console.log("I found it on the " + count + "-th attempt, the password was " + candidatePassword)