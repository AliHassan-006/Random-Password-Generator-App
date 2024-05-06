const passwordBox=document.getElementById("password")
const length=12;
const allChars = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/";

function createPassword(){

let password="";

password+=allChars[Math.floor(Math.random()*allChars.length)];


while(length>password.length)
{

    password+=allChars[Math.floor(Math.random()*allChars.length)];
}
   passwordBox.value=password;
}

function copyPassword(){

passwordBox.select();
document.execCommand("copy");


}