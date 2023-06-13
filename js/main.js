let temp;
let humidity;
let precip;
let uvIndex ;
let currTime;
let description;
let valid = true;
let loc = "Hello!";
let feelsLike;
function handleInput() {
    let apiKey = 'fcc0735fb36e11df3f7e3670083ed6c1';
    let url = 'http://api.weatherstack.com/current?access_key=' + apiKey;
    loc = ($("#input-text").val());
    console.log(loc);
    $.get({
        url: url,
        data: {"query":loc, "units":"f"},
        async: false,
        success: function(response) {
            try {
                temp = response.current.temperature;
                humidity = response.current.humidity;
                precip = response.current.precip;
                uvIndex = response.current.uv_index;
                currTime = response.location.localtime;
                description = response.current.weather_descriptions[0];
                feelsLike = response.current.feelslike;
            } catch(error) {
                let hi = response.error.info;
                $('#errorCatch').show().text(hi + " Please try again.");
                valid = false;
            }
        },
        error: function(xhr) {
            console.log("Failed!");
            return false;
        },
    });
    return valid;
}

function react() {
    if(handleInput()) {
        $("#successMessage").show().text("Success! Redirecting...");
        console.log(loc);
    } else {
        return;
    }
    setTimeout(function() {
        sessionStorage.setItem("temperature", temp);
        sessionStorage.setItem("description", description);
        sessionStorage.setItem("loc", loc);
        sessionStorage.setItem("uv", uvIndex);
        sessionStorage.setItem("time", currTime);
        sessionStorage.setItem("precip", precip);
        sessionStorage.setItem("humidity", humidity);
        sessionStorage.setItem("feelsLike", feelsLike);

        window.location.href = ("weatherShow.html");
    }, 2000);
}


$(document).ready(function() {
        $('#test').hide().fadeIn(5000);
        $('#errorCatch').hide();
        $("#successMessage").hide();
        $("#main-btn").click(function() {
            react();
        })
        $('#input-text').keypress(function(event) {
            if (event.keyCode === 13) {
                react();
            }
        });
});
