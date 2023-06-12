$(document).ready(function() {
    $('#temps').text(sessionStorage.getItem("temperature") + '°F');
    $('#descrip').text(sessionStorage.getItem("description"));
    $('#loc').text(sessionStorage.getItem("loc"));
    $("#feelsLike").text(sessionStorage.getItem("feelsLike"));
    $("#uvIndex").text(sessionStorage.getItem("uv"));
    $("#time").text(sessionStorage.getItem("time"));
    $("#precip").text(sessionStorage.getItem("precip"));
    $("#humidity").text(sessionStorage.getItem("humidity") + '%');
})

