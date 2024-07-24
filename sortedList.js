let numList = [4, 7, 52, 11, 0, 8];
let tmp = 0;
for (let i = 0; i<numList.length; i++){
    for(let j=0; j<numList.length-i; j++){
        if(numList[j]>numList[j+1]){
            tmp = numList[j];
            numList[j] = numList[j+1];
            numList[j+1]=tmp;
            
        }
    }
}
console.log(numList);
