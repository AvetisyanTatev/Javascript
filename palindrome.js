let word = prompt("Enter your word: ")

let tmp = ""

for (let i = word.length -1; i >= 0; i--){
    tmp += word[i]
}

if (tmp === word)
    console.log("Palindrom")
else
    console.log("Not Palindrom")