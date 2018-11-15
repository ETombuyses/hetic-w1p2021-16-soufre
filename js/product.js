/* JS PRODUIT */
var button1 = document.getElementById('btnColors');
var colors = document.getElementById('watch-colors');
button1.onclick = function(e) {
  if (colors.style.display == "flex") {
    colors.style.display = "none";
  } else {
    colors.style.display = "flex";
  }
};

var button2 = document.getElementById('btnDetails');
var details = document.getElementById('detailsList');

button2.onclick = function(e) {
  if (details.style.display == "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
};