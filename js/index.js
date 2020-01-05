$(document).ready(function() {
  const allButton = $(".allBtn");
  const webButton = $(".webBtn");
  const printButton = $(".printBtn");
  const productButton = $(".productBtn");

  const webItems = $(".web");
  const printItems = $(".print");
  const productItems = $(".product-photo-vid");
  const allItems = $(".all");

  $(allButton).click(function() {
    $(webButton).removeClass("active");
    $(printButton).removeClass("active");
    $(productButton).removeClass("active");
    $(allButton).addClass("active");
    $(allItems).appendTo(".design-portfolio");
  });

  $(webButton).click(function() {
    $(allButton).removeClass("active");
    $(printButton).removeClass("active");
    $(productButton).removeClass("active");
    $(webButton).addClass("active");
    $(printItems).remove();
    $(productItems).remove();
    $(webItems).appendTo(".design-portfolio");
  });

  $(printButton).click(function() {
    $(allButton).removeClass("active");
    $(webButton).removeClass("active");
    $(productButton).removeClass("active");
    $(printButton).addClass("active");
    $(webItems).remove();
    $(productItems).remove();
    $(printItems).appendTo(".design-portfolio");
  });

  $(productButton).click(function() {
    $(allButton).removeClass("active");
    $(printButton).removeClass("active");
    $(webButton).removeClass("active");
    $(productButton).addClass("active");
    $(webItems).remove();
    $(printItems).remove();
    $(productItems).appendTo(".design-portfolio");
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
