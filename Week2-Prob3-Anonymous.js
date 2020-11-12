// Sum of all numbers in an array 

var arr=[1,2,3,4,5];
var res;
var output = function(arr){
     res=arr.reduce(function(sum,index) { return index+sum} ,0)
     return res;
};
console.log(output(arr));