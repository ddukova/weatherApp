document.addEventListener("DOMContentLoaded", function(event) {
     function displayData(data){
          console.log(data);
          document.querySelector('p.city').innerHTML = data.name;
          
          var image = data.weather[0].main == 'Clear' ? 'img/sun.png': 'img/cloud.png';
          console.log(image);
          document.querySelector('.frame img').setAttribute('src', image); 
          
          var temperature = data.main.temp - 273.15;
          document.querySelector('h1').innerHTML = temperature.toFixed(1) + ' &#x2103 ';
          
          document.querySelector('.weather').setAttribute('src', image);
          document.querySelector('.pressure strong').innerHTML = data.main.pressure ;
          document.querySelector('.humidity strong').innerHTML = data.main.humidity ;
          document.querySelector('.wind strong').innerHTML = data.wind.speed ;
          document.querySelector('.visibility strong').innerHTML = data.visibility.toString().substring(0, 2) ;
          
        }
        
        axios({
          url: 'https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=%22metric%22+or+%22imperial%22&mode=xml%2C+html&q=Brussels%2Cbelgium',
          method: 'get',
          headers: {
            "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
            "X-RapidAPI-Key" : "f290dcc4f6mshea9f92b4112261ep18b95fjsneef33892e024"
          }
        })
        .then(function (response) {
           console.log('response', response);
             displayData(response.data);
            })           
        .catch(function (error) {              
              console.log(error);
            });   
        
  });