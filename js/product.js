/* JS PRODUIT */

window.onload=function(){
  var btn = document.getElementById('btnColors');
  var colors = document.getElementById('watch-colors');
  btn.onclick = function(e){
      if(colors.style.display=="flex"){
          colors.style.display="none";
      }else{
          colors.style.display="flex";
      }
  };



    var bouton = document.getElementById('btnDetails');
    var details = document.getElementById('detailsList');
    bouton.onclick = function(e){
        if(details.style.display=="block"){
            details.style.display="none";
        }else{
            details.style.display="block";
        }
    };
};