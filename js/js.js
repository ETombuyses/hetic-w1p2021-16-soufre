var nav = document.getElementById('nav')
var open = document.getElementById('open')
open.addEventListener('click', function() {
  nav.classList.toggle('is-open');
});


var imgsfront = document.querySelectorAll('image-front');
var imgsback = document.querySelectorAll('image-back');

for (var count=0; count<imgsfront.length; count++) {
  let imgfront = imgsfront[count];
  let imgback = imgsback[count];

imgfront.addEventListener('mouseover', function () {

imgfront.classList.remove()
});

}