$(document).keydown(function(event) {
    var code = event.keyCode;
    if (code >= 48 && code <= 57) {
        if (code === 48) {
            number = 9;
        } else {
            var number = code - 49;
        }

        $('.class-link')[number].click();
    }
    console.log('3333');
});

