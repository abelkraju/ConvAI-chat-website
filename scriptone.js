var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");
var notnow = document.getElementById("notnow");




btn.onclick = function () {
    var phnumber = document.getElementById('phonenumber').value;
    var username = document.getElementById('username').value;
    document.getElementById('phonenumber').required = true;
    var username = document.getElementById('username').required = true;





    if (phnumber !== '' && username !== '' && phnumber !== null && username !== null) {
        modal.style.display = "block";

        document.getElementById("confirmnumber").innerHTML = document.getElementById('phonenumber').value;
        console.log(document.getElementById('phonenumber').value)
    }

}


notnow.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
