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
            },
            error: function(xhr) {
                console.log("Failed!");
            }
        }

        )
    })
})
