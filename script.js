var xhr=new XMLHttpRequest();
var x;

xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=502278,in&appid=19b99375fa1daaccfeafa3f55c318398&units=metric', true)
xhr.responseType="text";

xhr.send(null);
xhr.onload=()=>{
  if(xhr.status===200)
  {
    x=JSON.parse(xhr.responseText);
    document.getElementById("location").innerHTML=x.name;
    
    document.getElementById("weather").innerHTML = x.weather[0].description;
    document.getElementById("temperature").innerHTML = x.main.temp;
    document.getElementById("desc").innerHTML = "WindSpeed  "+x.wind.speed;
    console.log(x);
  }
}
