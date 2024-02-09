var user=document.getElementById('username');
function validate(){
var pass=document.getElementById('pass1');
var lwr=document.getElementById('lower');
var upr=document.getElementById('upper');
var len=document.getElementById('length');
var symb=document.getElementById('symbol');
var num=document.getElementById('number');
if(pass.value.match(/[0-9]/)){
    num.style.color='green';
}
else{
    num.style.color='red';
}
if(pass.value.match(/[A-Z]/)){
    upr.style.color='green';
}
else{
    upr.style.color='red';
}
if(pass.value.match(/[a-z]/)){
    lwr.style.color='green';
}
else{
    lwr.style.color='red';
}
if(pass.value.match(/[#\%\*\@\?\&\!\^\$\+\-\=\,]/)){
    symb.style.color='green';
}
else{
    symb.style.color='red';
}
if(pass.value.length<6){
    len.style.color='red';
}
else{
    len.style.color='green';
}
}
function confirm(){
    var pass1=document.getElementById('pass1');
    var pass2=document.getElementById('pass2');
    if(pass1.value==pass2.value){
        document.getElementById('number').style.display='none';
        document.getElementById('upper').style.display='none';
        document.getElementById('lower').style.display='none';
        document.getElementById('symbol').style.display='none';
        document.getElementById('length').style.display='none';
    }
    else{
        document.getElementById('number').style.display='block'       
        document.getElementById('upper').style.display='block';
        document.getElementById('lower').style.display='block';
        document.getElementById('symbol').style.display='block';
        document.getElementById('length').style.display='block';
  }}
  function event(){
    var username=document.getElementById('username');
    console.log(username);
    var pass=document.getElementById('pass1');
    console.log(pass);
}