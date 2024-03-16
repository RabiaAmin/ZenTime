
var crs = document.querySelector("#cursor")
var bcrs = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",    function (dets) {
        crs.style.left = dets.x+17+"px"
        crs.style.top = dets.y+"px"
        bcrs.style.left = dets.x-85+"px"
        bcrs.style.top = dets.y-85+"px"
    }
)

var h4 = document.querySelectorAll("#nav h4")

h4.forEach(function(ele){
   ele.addEventListener("mouseenter",function(){
     crs.style.scale = 3
     crs.style.border = "0.1px solid #fff"
     crs.style.backgroundColor = "transparent"
   })
   
   ele.addEventListener("mouseleave",function(){
    crs.style.scale = 1
    crs.style.border = "0px solid #b011e8"
    crs.style.backgroundColor = "#b011e8"
  })
})

var btn = document.querySelector("button")
  btn.addEventListener("mouseenter",function(){
    crs.style.scale = 3
    crs.style.border = "0.1px solid #fff"
    crs.style.backgroundColor = "transparent"
  })
  
  btn.addEventListener("mouseleave",function(){
   crs.style.scale = 1
   crs.style.border = "0px solid #b011e8"
   crs.style.backgroundColor = "#b011e8"
 })




gsap.to("#nav",{
   backgroundColor :"#000",
   height:"65px",
   duration:0.5,
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body", 
    start: "top -10%",
    end:"top -11%",
    scrub:2,
   }
   
}) 


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
      trigger:"#main",
      scroller:"body",
      start: "top -10%",
      end:"top -80%",
      scrub:2,
    }

})


gsap.from("#about-us img, #about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.2,
  scrollTrigger: {
    trigger:"#about-us",
    scroller:"body",
    marker:true,
    start:"top 50%",
    end: "top 45%",
    scrub:1 ,
  }
})

gsap.from(".card",{
scale:0.8,
  opacity:0,
  duration:0.5,

  scrollTrigger: {
    trigger:".card",
    scroller:"body",
  
    start:"top 50%",
    end: "top 45%",
    scrub:1,
  }
})

gsap.from(".leftQ",{
   y:-30,
   x:-30,
  
  
    scrollTrigger: {
      trigger:".leftQ",
      scroller:"body",

      start:"top 75%",
      end: "top 60%",
      scrub:4,
    }
  })

  gsap.from(".rightQ",{
    y:30,
    x:30,
   
   scrub:1,
     scrollTrigger: {
       trigger:".leftQ",
       scroller:"body",
      
       start:"top 75%",
       end: "top 60%",
       scrub:4,
     }
   })

   gsap.from("#page4 h1",{
     y:50,
     scrollTrigger: {
      trigger:"#page4 h1",
      scroller:"body",
     
      start:"top 75%",
      end: "top 55%",
      scrub:4,
    }
   })