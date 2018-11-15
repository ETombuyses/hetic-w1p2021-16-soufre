/* pour la barre de navigation */
var nav = document.getElementById('nav')
var open = document.getElementById('open')
open.addEventListener('click', function() {
  nav.classList.toggle('is-open');
  montres.classList.remove('montreOption');
  news.classList.remove('News');
});


/* pour que le menu se referme a chaque action */
var accueil = document.getElementById('navaccueil');
/**/
var montres = document.getElementById('ChoiceMontre')
var montresOpen = document.getElementById('navmontres');
var produitBack = document.getElementById('produitBack');
/**/
var news = document.getElementById('ChoiceArticle');
var newsOpen = document.getElementById('navArticle');
var newsBack = document.getElementById('navBackNews');

/**/
montresOpen.addEventListener('click', function() {
montres.classList.toggle('montreOption');
news.classList.remove('News');
});



produitBack.addEventListener('click', function() {
nav.classList.remove('is-open');
montres.classList.remove('montreOption');
newsBack.classList.remove('navArticle');
news.classList.remove('News');
});
/**/

newsOpen.addEventListener('click', function() {
news.classList.toggle('News');
montres.classList.remove('montreOption');
newsBack.classList.remove('navArticle');
news.classList.remove('montreOption');
});

newsBack.addEventListener('click', function() {
montres.classList.remove('montreOption');
news.classList.remove('News');
nav.classList.toggle('is-open');
});
accueil.addEventListener('click', function() {
  nav.classList.toggle('is-open');
  montres.classList.remove('montreOption');
  news.classList.remove('News');
});


/* pour changer entre montre homme ou femme */
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
