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
  // if (x.className === "topnav") {
  //   x.className += " responsive";
  // } else {
  //   x.className = "topnav";
  // }
}