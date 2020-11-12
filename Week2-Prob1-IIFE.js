
var array=[1,2,3,4,5];
var odd = (function(array){
    var odd = array.filter(index=>index%2!=0);
    return odd;

})(array);
console.log(odd);