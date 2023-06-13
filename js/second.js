$(document).ready(function() {
    var desc = sessionStorage.getItem("description");
    $("body").css("color", "black")
    $('#temps').text(sessionStorage.getItem("temperature") + '°F');
    $('#descrip').text(desc);
    $('#loc').text(sessionStorage.getItem("loc"));
    $("#feelsLike").text(sessionStorage.getItem("feelsLike") + '°F');
    $("#uvIndex").text(sessionStorage.getItem("uv"));
    $("#time").text(sessionStorage.getItem("time"));
    $("#precip").text(sessionStorage.getItem("precip") + "in");
    $("#humidity").text(sessionStorage.getItem("humidity") + '%');
    if(desc.includes("rain") || desc.includes("Rain")) {
        $("body").css({"background-image": "url('../img/rain.jpeg')", "color":"white"})
    }
    if(desc.includes("overcast") || desc.includes("Overcast")) {
        $("body").css({"background-image":"url('https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcmNhc3QlMjBza3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80')", "color":"white"})

    }
    if(desc.includes("Partly cloudy") || desc.includes("partly cloudy")) {
        $("body").css("background-image", "url('../img/partlyCloudy.png')")
    }
    if(desc.includes("snow") || desc.includes("Snow")) {
        $("body").css({"background-image":"url('../img/snow.jpeg')", "color":"black"})
    }
    if(desc.includes("clear") || desc.includes("Clear")) {
        $("body").css({"background-image": "url('https://clarksvillenow.sagacom.com/files/2020/10/shutterstock_206307496-1200x768.jpg')"})
    }
    if(desc.includes("dust") || desc.includes("Dust")) {
        $("body").css({"background-image": "url('https://www.popsci.com/uploads/2022/02/23/dust-project-great-salt-lake.jpg?auto=webp')", "color":"white"})
    }
    if(desc.includes("mist") || desc.includes("Mist")) {
        $("body").css({"background-image": "url('../img/misty.jpg')", "color":"black"})    }
})

