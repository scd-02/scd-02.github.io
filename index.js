// NavBar Menu button
$(".hamburger-icon").click(() => {
  let iconState = $(".hamburger-icon img").attr("src");

  let menu = "./logo/menu.png";
  let cross = "./logo/cross.png";
  $(".sidebar").toggle();
  if (iconState == cross) {
    console.log("clicked");
    $(".hamburger-icon img").attr("src", menu);
  } else {
    $(".hamburger-icon img").attr("src", cross);
  }
});

$(".side-container")
  .children()
  .click(() => {
    $(".sidebar").toggle();
    $(".hamburger-icon img").attr("src", "./logo/menu.png");
  });

// Intro

var typed = new Typed(".profession", {
  strings: ["SoftWare Programmer", "Full Stack Dev", "UI/UX Designer"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});

// slider

var swiper = new Swiper(".mySwiper", {
  observer: true,
  observeParents: true,
  spaceBetween: 30,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
