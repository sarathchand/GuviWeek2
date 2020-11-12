// Return all the palindromes in an array

var arr=["sarath","chand","chekka","ABA"];
var res;
var output = function(arr){
     res=arr.filter(function(index){
         var string=index.split('');
         var old_string=string.join('');
         var rev = [...string];
         rev = rev.reverse();
         var reverse_string = rev.join('');
         if(old_string==reverse_string)
         {
             return index;
         }
         

         
        
        
})
return res;
}

console.log(output(arr));