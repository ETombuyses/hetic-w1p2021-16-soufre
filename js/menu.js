/* pour la barre de navigation */
var navbar = document.getElementById('nav');
var burgermenu = document.getElementById('open');
var watches = document.getElementById('ChoiceMontre');
burgermenu.addEventListener('click', function() {
  navbar.classList.toggle('is-open');
  watches.classList.remove('montreOption');
  news.classList.remove('News');
});


/* pour que le menu se referme a chaque action */
var home = document.getElementById('navaccueil');
/**/

var watchesopen = document.getElementById('navmontres');
var watchesproducts = document.getElementById('produitBack');
/**/
var news = document.getElementById('ChoiceArticle');
var newsopen = document.getElementById('navArticle');
var newsarticles = document.getElementById('navBackNews');

/**/
watchesopen.addEventListener('click', function() {
watches.classList.toggle('montreOption');
news.classList.remove('News');
});

watchesproducts.addEventListener('click', function() {
navbar.classList.remove('is-open');
watches.classList.remove('montreOption');
newsarticles.classList.remove('navArticle');
news.classList.remove('News');
});
/**/

newsopen.addEventListener('click', function() {
news.classList.toggle('News');
watches.classList.remove('montreOption');
newsarticles.classList.remove('navArticle');
news.classList.remove('montreOption');
});

newsarticles.addEventListener('click', function() {
watches.classList.remove('montreOption');
news.classList.remove('News');
navbar.classList.toggle('is-open');
});
home.addEventListener('click', function() {
  navbar.classList.toggle('is-open');
  watches.classList.remove('montreOption');
  news.classList.remove('News');
});
