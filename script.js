function handlePreloader() {
  if($('.loader-wrap').length){
      $('.loader-wrap').delay(1000).fadeOut(500);
  }
  TweenMax.to($(".loader-wrap .overlay"), 1.2, {
      force3D: true,
      left: "100%",
      ease: Expo.easeInOut,
  });
}

if ($(".preloader-close").length) {
  $(".preloader-close").on("click", function(){
      $('.loader-wrap').delay(200).fadeOut(500);
  })
}

$(window).on('load', function() {
  handlePreloader();
  enableMasonry();
});



var faf = document.querySelector(".navbar-toggler");
var blurr = document.querySelector(".blur");
var form = document.querySelector(".formcont")
var formm = document.querySelector(".form-cont")
var remove = document.querySelector(".bg-blur")
var removee = document.querySelector(".bg-blurr")
faf.addEventListener("click", ()=>{
    faf.querySelector("i").classList.toggle("fa-bars");
    faf.querySelector("i").classList.toggle("fa-times");

})
function openn(){
    form.style.display = ("initial")
    remove.style.display =("initial")
    }

function opennn(){
    removee.style.display =("initial")
    formm.style.display = ("initial")
    document.querySelector(".navbar-collapse").classList.remove("show");
    faf.querySelector("i").classList.toggle("fa-bars");
    faf.querySelector("i").classList.toggle("fa-times");
    


    }


    remove.addEventListener("click", ()=>{
        form.style.display = ("none")
        remove.style.display =("none")
        
    })
    removee.addEventListener("click", ()=>{
        formm.style.display = ("none")
        removee.style.display =("none")
        
    })



var log =document.getElementById("log");
var reg =document.getElementById("reg");
var indicator = document.getElementById("indicator");
    var logg =document.getElementById("logg");
var regg =document.getElementById("regg");
var indicatorr = document.getElementById("indicatorr");






function register(){
    reg.style.transform = "translateX(0px)"
    log.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(100px)"
}
function login(){
    reg.style.transform = "translateX(400px)"
    log.style.transform = "translateX(400px)"
    indicator.style.transform = "translateX(00px)"
}


function registerr(){
    regg.style.transform = "translateX(0px)"
    logg.style.transform = "translateX(0px)"
    indicatorr.style.transform = "translateX(100px)"
}
function loginn(){
    regg.style.transform = "translateX(300px)"
    logg.style.transform = "translateX(300px)"
    indicatorr.style.transform = "translateX(00px)"
};





function next(){
   
        right.style.display="block"
     
     
}


 var images = document.querySelectorAll('.slider-image');
    var currentImageIndex = 0;

    function showImage(index) {
      if (index < 0) {
        index = images.length - 1;
      } else if (index >= images.length) {
        index = 0;
      }

      for (var i = 0; i < images.length; i++) {
        images[i].classList.remove('acctive');
      }

      images[index].classList.add('acctive');
      currentImageIndex = index;
    }

    function previousImage() {
      showImage(currentImageIndex - 1);
    }

    function nextImage() {
      showImage(currentImageIndex + 1);
    }


    
    