var feild = document.querySelector('textarea');
var backup = document.querySelector('placeholder');
var button = document.querySelector('.button');

feild.onfocus = function(){
    button.style.display = 'display';
}