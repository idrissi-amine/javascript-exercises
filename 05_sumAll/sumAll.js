const sumAll = function(begin, end) {
    let res = 0;
    if(begin <0 || end <0 || typeof(begin) != "number" || typeof(end) != 'number'){
        return "ERROR"
    }
    else if(begin < end){
        for (let i = begin; i <= end; i++) {
        res = res + i;
        
    }
    }else{
        for (let i = end; i <= begin; i++) {
            res = res + i;
            
        }
    }
    
    return res

};

// Do not edit below this line
module.exports = sumAll;
