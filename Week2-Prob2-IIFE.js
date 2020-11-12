var arr=["sarath","chand"];
var res;
var output = function(arr){
     res=arr.map(index=>
        {
            return index.charAt(0).toUpperCase()+(index.slice(1,));
        })

        console.log(res);

}(arr);