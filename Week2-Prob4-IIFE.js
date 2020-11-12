// Return all the prime numbers in an array

var arr=[1,2,3,4,5,7,17];
var res;
var output = function(arr){
     res=arr.filter(function(index){
         var count = 0;
         if (index==2)
         {
             return index;
         }
         else{
             for (var i =2; i <= index ;i++)
             {
                 if(index%i==0)
                 {
                     count++;
                 }

             }
             if(count==1)
             {
                 return index;
             }
         }
     });
    return res;
}(arr)

console.log(output);