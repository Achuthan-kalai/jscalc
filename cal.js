function calculate() {
    var value1 = document.getElementById('a1').value;
    var value2 = document.getElementById('a2').value;

    document.getElementById('a3').innerHTML = "<p> This is Addition Value" + (Number(value1) + Number(value2)) + "</p>"
        + "<p> This is Subraction Value" + (Number(value1) - Number(value2)) + "</p>"
        + "<p> This is Multiplication Value" + (Number(value1) * Number(value2)) + "</p>"
        + "<p> This is Divison Value" + (Number(value1) / Number(value2)) + "</p>"
        + "<p> This is square of two Value" + Math.pow(Number(value1), 2) + "and" + Math.pow(Number(value2), 2) + "</p>"
        + "<p> This is log of two Value" + Math.log(Number(value1)) + "and" + Math.log(Number(value2)) + "</p>"
        + "<p> This is Squre Root of two Value" + Math.sqrt(Number(value1)) + "and" + Math.sqrt(Number(value2)) + "</p>"}
       










