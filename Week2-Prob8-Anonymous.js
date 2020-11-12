//Rotate array by k times
var arr =[1,2,2,4,5,5];
var no_of_rot =2;


var output = function(arr,no_of_rot){
    for (var i = 0 ;i <no_of_rot;i++ )
    {
        var first = arr.shift();
arr.push(first);

    }
    return arr;


}
console.log(output(arr,no_of_rot));