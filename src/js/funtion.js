var splide = new Splide(".splide", {
  perPage: 2,
  rewind: false,
  gap: 20,
  speed: 400,
  padding: "4rem",
  pagination: "slider",
  width: "100%",
  autoHeight: true,
  height: "350px",
  autoplay: true,
  pauseOnHover: true,
  breakpoints: {
    1024: {
      perPage: 2,
      //height : '10rem',
    },
    834: {
      perPage: 2,
      padding: "0rem",
      width: "50%",
    },
    768: {
      perPage: 2,
      width: "100%",
      height: "850px",
    },
    480: {
      perPage: 1,
      padding: "0rem",
      height: "100%",
    },
  },
});

splide.mount();
