const messageinput = document.getElementById ("text");



function createmessage(){
    document.getElementsByClassName ("textbox.h1").innerHTML = messageinput.value;
    console.log (messageinput);
    messageinput.value = "";
    

}