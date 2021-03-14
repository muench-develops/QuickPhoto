var btnAbonnieren = document.getElementById("btnAbonnieren");
var divAbonniert = document.getElementById("divAbonniert");
var Suche = document.getElementById("Suche");
var Galerie = document.getElementById("Galerie");


btnAbonnieren.addEventListener("click", function(event){
    event.preventDefault();
    if (btnAbonnieren.style.display === "none") {
        btnAbonnieren.style.display = "block";
        divAbonniert.style.display = "none";
      } else {
        btnAbonnieren.style.display = "none";
        divAbonniert.style.display = "block";
      }
  });

function toggleAbonniert(){
    if(divAbonniert.style.display === "block"){
        btnAbonnieren.style.display = "block";
        divAbonniert.style.display = "none";
    }
}

Suche.addEventListener("change", function(event){
    var suchWert = event.target.value;
    console.log(suchWert);
    if(suchWert.length >= 2) {
        console.log("Suche gestartet");
        var Bilder = Galerie.getElementsByTagName("img");
        for(var i = 0; i < Bilder.length; i++){
            console.log(Bilder[i]);
        }
    }
});