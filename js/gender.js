/* pour changer entre montre homme ou femme */
var gendermen1 = document.getElementById('gendermen1');
var genderwomen1 = document.getElementById('genderwomen1');
var watch1 = document.getElementById('montre1');
var watch2 = document.getElementById('montre2');
var gendermen2 = document.getElementById('gendermen2');
var genderwomen2 = document.getElementById('genderwomen2');
var watch3 = document.getElementById('montre3');
var watch4 = document.getElementById('montre4');

gendermen1.addEventListener('click', function() {
  watch2.classList.remove('image-front');
  watch1.classList.remove('image-back');
  watch2.classList.add('image-back');
  watch1.classList.add('image-front');
});
genderwomen1.addEventListener('click', function() {

  watch1.classList.remove('image-front');
  watch2.classList.remove('image-back');
  watch1.classList.add('image-back');
  watch2.classList.add('image-front');
});

gendermen2.addEventListener('click', function() {
  watch4.classList.remove('image-front');
  watch3.classList.remove('image-back');
  watch4.classList.add('image-back');
  watch3.classList.add('image-front');
});
genderwomen2.addEventListener('click', function() {

  watch3.classList.remove('image-front');
  watch4.classList.remove('image-back');
  watch3.classList.add('image-back');
  watch4.classList.add('image-front');
});