const navResponsive=document.getElementById("nav-responsivo");
const button = document.getElementById("button");

button.addEventListener("click", ()=>{
    navResponsive.classList.toggle("active");
    console.log("HoLA")
})