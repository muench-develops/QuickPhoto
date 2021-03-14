var btnAbonnieren = document.getElementById("btnAbonnieren");
var divAbonniert = document.getElementById("divAbonniert");
var Suche = document.getElementById("Suche");
var Galerie = document.getElementById("Galerie");
var Bilder = Galerie.getElementsByTagName("img");

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
    var suchWert = new String(event.target.value);
    console.log(suchWert);  
    console.log("Suche gestartet");        
    for(var i = 0; i < Bilder.length; i++){
        if(suchWert.length >= 1) {
            if(Bilder[i].src.includes(suchWert)){
                Bilder[i].style.display = "block";
            }
            else{
                Bilder[i].style.display = "none";
            }
        }
        else{
            Bilder[i].style.display = "block";
        }
    };
    
});

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM is ready.')
    for(var i = 0; i < Bilder.length; i++){
        if(Bilder[i].onclick == null){
            Bilder[i].addEventListener("click", imgClick.bind(Bilder[i]), false);
        }
    }
});

// Funkt nicht xD
function imgClick(){
    console.log(this.classList);
    if(this.classList.contains("border border-success")){
        this.classList.add("border border-success");
        console.log(this.classList);
    }
    else{
        this.classList.remove("border");
        this.classList.remove("border-success");
    }
}