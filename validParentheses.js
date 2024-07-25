function isValid(s) {
    let stack = [];
    let map = {

        '(': ')',

        '{': '}',

        '[': ']'

    };
    
    for (let char of s) {
        if (char in map) {
            stack.push(char);
        } else {
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false;
            }

        }

    }

       return stack.length === 0;

}

console.log(isValid("()"));       

console.log(isValid("()[]{}"));   

console.log(isValid("(]"));       

console.log(isValid("([)]"));     

console.log(isValid("{[]}"));