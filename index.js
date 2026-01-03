let toTop = document.getElementById("totop");

window.addEventListener("scroll", () => {
  if(document.body.scrollTop >200 || document.documentElement.scrollTop>200){
    toTop.style = "display:blck";
  }
  else{
    toTop.style = "display:none";
  }
})

let backToTop = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



const navPosition = document.getElementById("nav-position");


const monitorNavposition = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let prevElem = entry.target.previousElementSibling;
        prevElem.classList.toggle('sticky', !entry.isIntersecting)
    })
})

monitorNavposition.observe(navPosition);