const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");
const body = document.body;
let open = false;

hamburger.addEventListener("click" , () => {
  toggleNavBar();
})

function toggleNavBar(){
  if(!open){
   navBar.style.left = "0px";
    hamburger.classList.add("active");
    body.style.overflow = "hidden";
   open = true;
  }else{
    navBar.style.left = "-269px";
    hamburger.classList.remove("active");
    body.style.overflow = "visible";
    open = false;
  }   
}
