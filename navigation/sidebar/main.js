window.onload = function(){
    var closeBtn = document.querySelector(".close");
    var sideNav = document.querySelector(".sidenav");
    var hamburger = document.querySelector(".ham-box");
    var logo = document.querySelector(".sideNavLogo h1");
    var links = document.querySelector(".sidenav a");
    var background = document.querySelector(".overlay");
    var token = false

    closeBtn.addEventListener("click", function(event){
        event.preventDefault();
        background.style.cursor = "default";
        token = false;
        sideNav.style.width = "0px";
        logo.style.opacity = "0";
        background.style.backgroundColor = "rgba(0, 0, 0, 0.0)";   
    });
    
    hamburger.addEventListener("click", function(event){
        event.preventDefault();
        background.style.cursor = "pointer";
        sideNav.style.width = "280px";
        logo.style.opacity = "1";
        background.style.zIndex = "1";
        background.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        token = true;
    });

    background.addEventListener("click", function(event){
        event.preventDefault();
        token = false;
        sideNav.style.width = "0px";
        logo.style.opacity = "0";
        background.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        background.style.cursor = "default";
           
    });

    background.addEventListener("transitionend", function(event){
        if(token === false) {
            background.style.zIndex = "-1";
        }   
    });
}
