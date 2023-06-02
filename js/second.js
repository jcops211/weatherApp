$(document).ready(function() {
    $('#temps').text(sessionStorage.getItem("temperature") + '°F');
    $('#descrip').text(sessionStorage.getItem("description"));
    if($("#descrip").text() === "Partly cloudy") {
        $(this).css('background-image', 'url("../img/partlyCloud.png")')
    }
})

