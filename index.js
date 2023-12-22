const messageinput = document.getElementById ("texto")
const ul =document.querySelector ("ul")
const li = document.createElement('li')
console.log(ul)




function createmessage(){
    ul.appendChild(document.createElement("li"));
    document.querySelector("li").innerText=(messageinput.value)
   

}