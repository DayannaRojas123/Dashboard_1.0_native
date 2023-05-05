document.addEventListener("DOMContentLoaded", function() {
    var intro = document.getElementById("intro")
  
    if (localStorage.getItem("hasVisited") === null) {
      // Si el usuario no ha visitado la página antes, muestra el texto y guarda en el almacenamiento local del navegador
      intro.style.display = "block";
      
      localStorage.setItem("hasVisited", true)
  
     
      setTimeout(function() {
        intro.style.display = "none"
      }, 4000)
    }


  }
  )

