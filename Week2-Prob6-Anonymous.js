// Return median of two sorted arrays of same size

var arr=[1,2,3,4,5,6];
var arr1=[11,12,13,14,15,16];
var res;
var output = function(arr,arr1){
    
    var mid=Math.floor(arr.length/2);
     res=arr.reduce(function(median1,value,index){
         if((arr.length)%2 ==0)
         {
             return(((arr[mid]+arr1[mid-1])/2) +((arr[mid-1]+arr1[mid-1])/2))
             

         }
         else{
            return((arr[mid]+arr1[mid])/2);

         }


     },0)
    
return res;
}

console.log(output(arr,arr1));