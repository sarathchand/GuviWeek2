var arr=["sara","chand"];
var res;
console.log(arr[0].charAt(0).toUpperCase());
var output = function(arr){
     res=arr.map(index=>
        {
            return index.charAt(0).toUpperCase()+(index.slice(1,));
        })

        return res;

};

console.log(output(arr));