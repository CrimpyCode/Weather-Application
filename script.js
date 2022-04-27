let weather = {
    apiKey: "08890b771e24061b7238e259f9dd5e22",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + this.apiKey + "&units=imperial"
        )
            .then((response) => response.json())
            .then((data) => 
                this.displayWeather(data)
            )
    },
    displayWeather : function (data){
        const { name } = data;
        const { temp, temp_min, temp_max, feels_like } = data.main;
        const { icon, description } = data.weather[0];
        const { speed } = data.wind;
    
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = `${temp.toFixed(0)}°F`
        document.querySelector(".feelslike").innerText = `Feels like ${feels_like.toFixed(0)}°F`
        document.querySelector(".wind").innerText = `Wind speed at ${speed}mph`
        document.querySelector(".highAndLow").innerText = `High of ${temp_max.toFixed(0)}°F and low of ${temp_min.toFixed(0)}°F`
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.search()
    console.log(background.fetchBackground(city))
})

document.querySelector(".search-bar").addEventListener("keyup",function (event){
    if (event.key =="Enter"){
        weather.search()
    }
})

weather.fetchWeather("Chicago")

let background = {
    apiKey: "G_DiQd0y1z3mgFtK8L5Pc4mhQIWTEMrf-e-zVeC5QJc",
    fetchBackground: function (city) {
        fetch(
            "https://api.unsplash.com/search/photos/?client_id="+this.apiKey+"&query="+city
        )
        .then(res => res.json())
        .then(data => document.body.style.backgroundImage.src = data.results[1].urls.regular)
    }
}


//Math.floor(Math.random()*10)
