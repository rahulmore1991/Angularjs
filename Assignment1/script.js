
var userData = JSON.parse(localStorage.getItem('userinfo'));
function login(){
    var uname = document.form.username.value;
    var password = document.form.password.value;
    if( password == userData.password && uname == userData.username){
        //window.path('file:///home/rahul/MMM/Login/welcome.html');
        window.location.href = 'welcome.html';
        return false;
        //window.location.assign('file:///home/rahul/MMM/Login/welcome.html');
    }else{
        alert("Please enter valid username and password"); 
    }
};


