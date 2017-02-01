var globalVar;

exports.setFoo = function(val){
    globalVar = val;
};

exports.returnValue = function(){
    return globalVar;
};