function calc() {

    obj = { addnum: [], evennum: [] };
    var sumofevent = 0;
    var sumofodd = 0;
    var add = document.getElementById('h1').value;
    var even = document.getElementById('h2').value;
    for (i = Number(add); i <= even; i++) {
        if (i % 2 == 0) {
            obj.addnum.push(i);
            sumofevent += i;
        }
        else {
            obj.evennum.push(i);
            sumofodd += i;
        }

    }
    console.log(obj.addnum.length)
    document.getElementById('h3').innerHTML = "<p> This is sum of Total Value " + (Number(sumofevent) + Number(sumofodd)) + "</p>"
        + "<p> This is sum of length " + (obj.addnum.length + obj.evennum.length) + "</p>"
        + "<p> This Even Number" + obj.addnum + "</p>"
        + "<p> This Odd Number" + obj.evennum + "</p>"
        + "<p> Thid Even or Even number total" + sumofevent + "</p>"
        + "<p> Thid Odd or Even number total" + sumofodd + "</p>"

}