function openNav() {

    const mq = window.matchMedia("(max-width: 600px)");
    if (mq.matches){
        document.getElementById("myNav").style.width="100%"
    }else{
        document.getElementById("myNav").style.width="25%"

    }
}

function closeNav() {
    document.getElementById("myNav").
        style.width="0%"
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




