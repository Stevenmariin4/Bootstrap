$(function () {
    $('[data-toggle="toolip"]').tooltip();
})

function myFunction() {
    var x = document.getElementById("snackbar");
    var y = document.getElementById("fail");
    var userName = document.getElementById("userName").value;
    if (userName == "") {
        y.className = "show";
        setTimeout(function () { y.className = y.className.replace("show", ""); }, 3000);
    } else {
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }

}
function verify() {
    var x = document.getElementById("snackbar");
    var y = document.getElementById("fail");
    var z = document.getElementById("apellido");
    var v = document.getElementById("charla");
    var userName = document.getElementById("nombre").value;
    if (userName == "" | z == "" | v == "") {
        y.className = "show";
        setTimeout(function () { y.className = y.className.replace("show", ""); }, 3000);
    } else {
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }

}