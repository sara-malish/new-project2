let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    moscow: {
      temp: -5,
      humidity: 20
    }
  };
  
  // write your code here
  
  //let city = prompt("Enter a city?");
  //city = city.toLowerCase();
  //if (weather[city] !== undefined) {
  //let temperature = weather[city].temp;
  //let humidity = weather[city].humidity;
  //let celsiusTemperature = Math.round(temperature);
  //let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
  
  //alert(
  //`It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  //);
  //} else {
  //alert(
  // `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  //);
  //}
  //week 4
  //part 1
  let now = new Date();
  let time = document.querySelector("#real-time");
  
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  time.innerHTML = `${day} ${hours}:${minutes}`;
  
  //part 2
  function changeCity(event) {
    event.preventDefault();
    let newCity = document.querySelector("#changeCity");
    let city = document.querySelector("#city");
    city.innerHTML = `${newCity.value}`;
  }
  let city = document.querySelector("#city-degrees");
  city.addEventListener("submit", changeCity);
  //bonus
  //function changeDegree(event) {
  //event.preventDefault();
  //let changedTemp = document.querySelector("#now");
  //changedTemp = (0 * 9) / 5 + 32;
  //}
  //let realTemp = document.querySelector("#now");
  //realTemp.addEventListener("click", changeDegree);
  
  function showTemperature(response) {
    let localTemp = document.querySelector("#localTemp");
    let temp = Math.round(response.data.main.temp);
    localTemp.innerHTML = `${temp}ºC`;
  }
  let apiKey = "7f8edb1ea637b68571f975517f10b824";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  axios.get(apiUrl).then(showTemperature);
  
  function showWeather(response){
    let now=document.querySelector("#now");
    let temperature= Math.round(response.data.main.temp);
    now.innerHTML=`${temperature}ºC`;
  }
  function retreivePosition(position){
    let apiKey="f8edb1ea637b68571f975517f10b824";
    let lat= position.coords.latitude;
    let long= position.coords.longitude;
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }
  navigator.geolocation.getCurrentPosition(reteivePosition);
  
  