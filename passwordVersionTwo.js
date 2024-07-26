let symbols = "!@#$%^&*()_+-=?/>.<,\"':;][}{\|~`";
let count = 0;
let actualPassword = prompt("Enter your password: ");
let candidatePassword = ['0', '0', '0'];
for (let i  = 0; i < symbols.length; i++){
    for (let j = 0; j<  actualPassword.length; j++){
        if (symbols[i] == actualPassword[j])
        candidatePassword[j] = symbols[i]
    }count++;
    if (!candidatePassword.includes('0'))
    break;
    }

console.log("I found ti on the "+ count +" attempt, the password is: ")