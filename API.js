var xhttpreq = new XMLHttpRequest();
var data;
var weather_url=[];

xhttpreq.open('GET','https://restcountries.eu/rest/v2/all',true);

xhttpreq.send(null);

 xhttpreq.onload=function(){
    data  = JSON.parse (this.response);
    //console.log(data)
    for(var i = 0 ; i < data.length;i++)
    {
        var latitude = data[i]["latlng"][0];
        var longitide = data[i]["latlng"][1];

        var link="http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitide+"&appid=19e606f67b581be1af208a1e64c98589";
        weather_url.push(link);
        
}
//console.log(weather_url);
secondcall(weather_url);
    
};

function secondcall(weather_url)
{
    var httpreq_weather = new XMLHttpRequest();
  
        for (var i = 0 ; i < weather_url.length;i++)
        {
            var url = weather_url[i];
            console.log(url);
            httpreq_weather.open('GET',url,false);
            httpreq_weather.send();
            httpreq_weather.onload=function(){
                console.log(httpreq_weather.response);
            }

        }   
    
            
         

}


    
