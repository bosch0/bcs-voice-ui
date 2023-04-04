$(document).ready(function() {  
    console.log('^3BCS-voice-hud^0 by B O S C H#4014')
    closing = true;
    window.addEventListener('message', function(event) {
        var data = event.data;
        var voice = document.getElementById("voice");

        if (data.proximity == 1) {
            $('.proximity').html('SUSURRAR')
        } else if (data.proximity == 2) {
            $('.proximity').html('NORMAL')
        } else if (data.proximity == 3) {
            $('.proximity').html('GRITAR')
        }

        if (data.toggleprox) {
            closing = false;
            $('.talking').fadeIn(500)
            $('.proximity').fadeIn(500)
            setTimeout(function(){
                closing = true;
            }, data.timeout)
        }

        if (data.talking || data.radio) {
            $('.talking').fadeIn(500)
        } else if (! data.talking && ! data.radio && closing) {
            $('.talking').fadeOut(500)
            $('.proximity').fadeOut(500)
        }

        if (data.radio) {
            voice.classList.remove("fa-microphone");
            voice.classList.add("fa-walkie-talkie");
        } else {
            setTimeout(function(){
                voice.classList.remove("fa-walkie-talkie");
                voice.classList.add("fa-microphone");
            }, 500);
        }

    });
});