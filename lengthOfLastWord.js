var lengthOfLastWord = function(s) {
    var symbolsSum = 0
    for (let i = s.length-1; i>=0; i--){
        if ((s[i] === " ") && (symbolsSum !== 0)){
            return symbolsSum;
        }
        if (s[i] !== " ")
            symbolsSum++;
    }
    return symbolsSum;
};
   