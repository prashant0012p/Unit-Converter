var input = document.getElementById('input');
var output = document.getElementById('output');



var button = document.getElementById('btn');


button.addEventListener('click', function () {


    // var declare
    var i = input.value;

    // input value condition
    if (i <= -1) {

        var o = output;
        o.value = "Please enter a feet value > 0"
        return false;


    }
    else if (i == 0 || i == "  " || i == null) {


        var o = output;
        o.value = "Please enter value"
        return false;




    }
    else if (isNaN(i)) {

        var o = output;
        o.value = "Please enter value in Number"
        return false;


    }

    else {

        var o = output;
        o.value = i * 30.48 + " " + "CM"
        return true;

    }







})