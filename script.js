/*var, let, const*/
/*const = constatnte => que não muda*/ 
const $html = document.querySelector('html');
const $checkbox =document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
   $html.classList.toggle('dark-mode');
}) 