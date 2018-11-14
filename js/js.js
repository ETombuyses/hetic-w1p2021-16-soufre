var nav = document.getElementById('nav')
var open = document.getElementById('open')
open.addEventListener('click', function() {
  nav.classList.toggle('is-open');
});


var gendermen1 = document.getElementById('gendermen1');
var genderwomen1 = document.getElementById('genderwomen1');
var montre1 = document.getElementById('montre1');
var montre2 = document.getElementById('montre2');
var gendermen2 = document.getElementById('gendermen2');
var genderwomen2 = document.getElementById('genderwomen2');
var montre3 = document.getElementById('montre3');
var montre4 = document.getElementById('montre4');

gendermen1.addEventListener('click', function() {
  montre2.classList.remove('image-front');
  montre1.classList.remove('image-back');
  montre2.classList.add('image-back');
  montre1.classList.add('image-front');
});
genderwomen1.addEventListener('click', function() {
 
montre1.classList.remove('image-front');
montre2.classList.remove('image-back');
montre1.classList.add('image-back');
montre2.classList.add('image-front');
});



gendermen2.addEventListener('click', function() {
  montre4.classList.remove('image-front');
  montre3.classList.remove('image-back');
  montre4.classList.add('image-back');
  montre3.classList.add('image-front');
});
genderwomen2.addEventListener('click', function() {
 
montre3.classList.remove('image-front');
montre4.classList.remove('image-back');
montre3.classList.add('image-back');
montre4.classList.add('image-front');
});
