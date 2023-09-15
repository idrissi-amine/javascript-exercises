const repeatString = function(word, amount) {
    if(amount<0){
        return "ERROR"
    }
    let res= "";
    for(let i =0; i<amount;i++){
        res = res + word
    }
    return res;

};

// Do not edit below this line
module.exports = repeatString;
