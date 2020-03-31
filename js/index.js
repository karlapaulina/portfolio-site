$(document).ready(function() {
  const allButton = $(".allBtn");
  const digitalButton = $(".digitalBtn");
  const printButton = $(".printBtn");
  const productButton = $(".productBtn");

  const digitalItems = $(".digital");
  const printItems = $(".print");
  const productItems = $(".product-photo-vid");
  const allItems = $(".all");

  $(allButton).click(function() {
    $(digitalButton).removeClass("active");
    $(printButton).removeClass("active");
    $(productButton).removeClass("active");
    $(allButton).addClass("active");
    $(allItems).appendTo(".portfolio");
  });

  $(digitalButton).click(function() {
    $(allButton).removeClass("active");
    $(printButton).removeClass("active");
    $(productButton).removeClass("active");
    $(digitalButton).addClass("active");
    $(printItems).remove();
    $(productItems).remove();
    $(digitalItems).appendTo(".portfolio");
  });

  $(printButton).click(function() {
    $(allButton).removeClass("active");
    $(digitalButton).removeClass("active");
    $(productButton).removeClass("active");
    $(printButton).addClass("active");
    $(digitalItems).remove();
    $(productItems).remove();
    $(printItems).appendTo(".portfolio");
  });

  $(productButton).click(function() {
    $(allButton).removeClass("active");
    $(printButton).removeClass("active");
    $(digitalButton).removeClass("active");
    $(productButton).addClass("active");
    $(digitalItems).remove();
    $(printItems).remove();
    $(productItems).appendTo(".portfolio");
  });

  const navSlide = () => {
    const burgerIcon = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".link-item");

    burgerIcon.addEventListener("click", () => {
      //Toggle Nav
      burgerIcon.classList.toggle("is-active");
      nav.classList.toggle("nav-active");
    });
  };
  navSlide();
});
