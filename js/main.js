$(document).ready(function(){
    let apiKey = 'fcc0735fb36e11df3f7e3670083ed6c1';
    let url = 'http://api.weatherstack.com/current';
    $('#test').hide().fadeIn(5000).slideDown();
    $('#main-btn').on("click", function () {
        let input = ($("#input-text").val());
        $.get({
                url: url,
                data: {"access_key": apiKey,"query":input, "units":"f"},
                success: function(response) {
                    console.log("success!", response);
                    let temp = response.current.temperature;
                    let humidity = response.current.humidity;
                    let precip = response.current.precip;
                    let uvIndex = response.current.uv_index;
                    let currTime = response.location.localtime;
                    let description = response.current.weather_descriptions[0];
                    console.log(description);
                    window.location.href = "weatherShow.html";

                },
                error: function(xhr) {
                    console.log("Failed!");
                }
            }

        )
    })
})