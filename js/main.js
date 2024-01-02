let result = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

async function getdata(country="Cairo") {
  var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2b9728e05457471eb8c84704232912&q=${country}&days=3&aqi=no&alerts=no`);
  result = await res.json();
  console.log(result.forecast.forecastday);
  innerData();
}
function innerData() {
  const d = new Date(result.forecast.forecastday[0].date);
  let month = months[d.getMonth()];
  let day=days[d.getDay()]
  let daynum = d.getDate();
  const d1 = new Date(result.forecast.forecastday[1].date);
  let day1=days[d1.getDay()]
  const d2 = new Date(result.forecast.forecastday[2].date);
  let day2=days[d2.getDay()]
  document.getElementById("day").innerHTML = day;
  document.getElementById("date").innerHTML = daynum+month;
  document.getElementById("day1").innerHTML = day1;
  document.getElementById("day2").innerHTML = day2;
  document.getElementById("country").innerHTML = result.location.name;
  document.getElementById("dgree").innerHTML =result.current.temp_c +`<sup>o</sup>C`;
  document.getElementById("tempx").innerHTML =result.forecast.forecastday[1].day.maxtemp_c+`<sup>o</sup>C`;
  document.getElementById("tempn").innerHTML =result.forecast.forecastday[1].day.mintemp_c+`<sup>o</sup>C`;
  document.getElementById("tempxx").innerHTML =result.forecast.forecastday[2].day.maxtemp_c+`<sup>o</sup>C`;
  document.getElementById("tempnn").innerHTML =result.forecast.forecastday[2].day.mintemp_c+`<sup>o</sup>C`;
  document.getElementById("stutus").innerHTML = result.current.condition.text;
  document.getElementById("stuts2").innerHTML = result.forecast.forecastday[1].day.condition.text;
  document.getElementById("stuts3").innerHTML = result.forecast.forecastday[2].day.condition.text;
  document.getElementById("stutus_img").setAttribute("src", "https://" + result.current.condition.icon);
  document.getElementById("stutus_img_2").setAttribute("src","https://" + result.forecast.forecastday[1].day.condition.icon);
  document.getElementById("stutus_img_3").setAttribute("src", "https://" + result.forecast.forecastday[2].day.condition.icon);
}
var input=document.getElementById("input");
function search(){
 input.addEventListener("change",function(){
  getdata(input.value)
 })
}

getdata() 
search()

