function validate(){
    var mobile=document.getElementById("mobile").value;
    var mobileexp=/^\d{10}$/;
    if(mobile.match(mobileexp)){
        return true;
    }
    else{
        alert("Invalid Mobile number!");
        return false;
    }
}