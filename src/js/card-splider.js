$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal != null ? myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
}) : "";

var splide2 = new Splide("#splidesiniestro.splide", {
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
        1280: {
            perPage: 3,
            padding: "5%",
            arrows: false,
            gap: -5,
          },
        834: {
            perPage: 2,
            padding: 9,
            gap: "0em",
            arrows: false,
        },
        570: {
            perPage: 1,
            arrows: false,
            padding: 10,
            gap: "-2em",
        },
        480: {
            perPage: 1,
            arrows: false,
            padding: 9,
            gap: "0em",
        },
        414: {
            perPage: 1,
            arrows: false,
            padding: 1,
            gap: "-2em",
        },
        360: {
            perPage: 1,
            gap: -1,
            arrows: false,
        },
    },
});

splide2.mount();