if(document.getElementsByClassName("splide").length > 0){
  var splide = new Splide(".splide", {
    arrows: true,
    type: 'slide',
    width: '91',
    perPage: 4,
    rewind: false,
    gap: 20,
    speed: 400,
    padding: "3rem",
    pagination: "slider",
    width: "100%",
    autoplay: true,
    pauseOnHover: true,
    breakpoints: {
      1400: {
        perPage: 4,
        padding: 0,
        gap: "2em",
      },
      1280: {
        perPage: 3,
        padding: "5%",
        arrows: false,
        gap: -5,
      },
      1024: {
        perPage: 3,
        padding: "5%",
        arrows: false,
        gap: -5,
      },
      834: {
        perPage: 2,
      },
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1,
        gap: -1,
        arrows: false,
      },
    },
  });
  
  splide.mount();
}

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});


var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

if(myModal != null){
  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  });
}


var archivos = document.querySelectorAll(".archivos-adjuntos section#archivos_cargados");
if(archivos.length > 0) {
  archivos.forEach(element => {
    archivo = element.querySelectorAll(".container");
    if(archivo.length > 1 ) {
        archivo.forEach(elementArchivo => {
        elementArchivo.classList.add("col-lg-6");
        elementArchivo.classList.add("col-md-6");
      });
    }else{
      console.log(archivo[0].classList.add("col-lg-12"));
    }
  });
}