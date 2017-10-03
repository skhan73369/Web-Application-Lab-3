/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("menu").classList.toggle("show");
    changeText();
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menubtn')) {

    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        changeText();
      }
    }
  }
}

function changeText(){
    var btn = document.getElementById("btnmenu");
    if(btn.value =="Show Menu")
      btn.value= "Hide Menu";
    else 
      btn.value = "Show Menu";
}