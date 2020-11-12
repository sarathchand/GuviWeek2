//Remove duplicates from an array
var arr =[1,2,2,4,5,5];


var output = function(arr){
    var list1 = [... new Set(arr)];
return list1;

}(arr)
console.log(output);