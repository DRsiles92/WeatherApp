function findWeather() {
    var cityInputEl = document.querySelector("#citySearch").value;
    console.log(cityInputEl);

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/forecast?q=` + cityInputEl + `&units=imperial&APPID=5a7da3a6213a0314af540e4253332ee3`,
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            console.log(`http://api.openweathermap.org/data/2.5/forecast?q=` + cityInputEl + `&units=imperial&APPID=5a7da3a6213a0314af540e4253332ee3`);
            show(data);
        }
    })
}

function show(data) {
    // return 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var $newCardDiv = $("<div />", {
        class: 'col-11 card p-0'
    })

    $(".rNav").append($newCardDiv);

    var $newCard = $("<div />", {
        class: 'card-body'
    })

    $newCardDiv.append($newCard);

    var city = document.createTextNode(data.city.name + ' (' + today + ')');
    var temp = document.createTextNode('Temperature: ' + data.list[0].main.temp + "℉");
    var humidity = document.createTextNode('Humidity: ' + data.list[0].main.humidity + "%");
    var windspeed = document.createTextNode('Wind Speed: ' + data.list[0].wind.speed + "mph");
    var iconURL = ' <img id="weatherIcon" height="25px" width="25px" src="http://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '.png"/>';
    console.log(iconURL);

    var $cityName = $('<p id="cityName">' + data.city.name + ' (' + today + ')' + " " + iconURL + '</p>'); //creates city header with icon

    $newCard.append($cityName); //shows city, date and inserts space
    $newCard.append(temp).append('<br />'); //shows temp
    $newCard.append(humidity).append('<br />'); //shows humidity
    $newCard.append(windspeed).append('<br />'); //shows windspeed

    console.log(data.city.name + ' (' + today + ')');
    console.log(data.list[0].weather[0].icon);
    // <img src="http://openweathermap.org/img/wn/" + "data.list[0].weather[0].icon" +"10d@2x.png"></img>
    // <img src="http://openweathermap.org/img/wn/10d@2x.png"></img>
    console.log(data.list[0].main.temp + "℉");
    console.log(data.list[0].main.humidity + "%");
    console.log(data.list[0].wind.speed + "mph");

}
