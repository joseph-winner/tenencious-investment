// NAVIGATION BAR
var openBtn = document.getElementsByClassName("humberger")[0]
var closeBtn = document.getElementsByClassName("closeBtn")[0]

openBtn.addEventListener("click", function(){
    document.getElementsByClassName("side-menu-content")[0].style.width = "300px";
})

closeBtn.addEventListener("click", function(){
    document.getElementsByClassName("side-menu-content")[0].style.width = "0px";
})


