var welcomeMsgToNodeJs = function() {
console.log("Welcome to the Develpment Work of Node js by Sourabh Sethi");
}
welcomeMsgToNodeJs()
var start = function(callback) {
callback();
}
start(welcomeMsgToNodeJs)
var look = function(dir){
if (dir === 'west')  { console.log("There is something for you....");  }
if (dir === 'east')  { console.log("hi ! your are in east"); }
}
var walk = function(dir){
if (dir === 'west')  { console.log("oohh !! its very dark"); }
if (dir === 'south') { console.log("hi !! you are in south"); }
}
var getInput = function (param, cb) {
cb(param);
}
getInput('west',look)
getInput('west',walk)
