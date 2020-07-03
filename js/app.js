// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}

// Toggle Menu
function toggleMenu() {
  var x = document.querySelector("#topnav");
  x.classList.toggle("responsive");
}
window.onload = function () {

}
$(".navbar a, footer a[href='#myPage']").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      { scrollTop: $(hash).offset().top },
      500,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
$(window).scroll(function () {
  $(".slideanim").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});