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


$(document).ready(function(){
        var num = 100;
       $(window).bind('scroll',function(){
        if ($(window).scrollTop() >= num){
          $("navbar").addClass('sticky').css('background-color','#ffff');
        }else{
          $("navbar").removeClass('sticky').css('background-color','transparent');
        }
       })
      })