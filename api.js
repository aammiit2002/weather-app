link ="https://api.openweathermap.org/data/2.5/weather?q=jharsuguda&appid=da3294c46f602897a32330cf339cc7bd";
            var request = new XMLHttpRequest();
            request.open('GET',link,true);
            request.onload = function(){
            var obj = JSON.parse(this.response);
            console.log(obj);
            document.getElementById('weather').innerHTML=obj.weather[0].description;
            document.getElementById('location').innerHTML=obj.name;
            document.getElementById('temp').innerHTML=Math.round(obj.main.temp-273.15);
            document.getElementById('icon').src="https://openweathermap.org/img/w/"+ obj.weather[0].icon+ ".png"; 
            }
            if(request.status>=200 && request.status<400){
                var temp = obj.main.temp;
            }
            else{
                console.log("The city data is not available")
            }
            request.send();