
var crs = document.querySelector("#cursor")
var bcrs = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",    function (dets) {
        crs.style.left = dets.x-10+"px"
        crs.style.top = dets.y-10+"px"
        bcrs.style.left = dets.x-85+"px"
        bcrs.style.top = dets.y-85+"px"
    }
)




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
      start: "top -40%",
      end:"top -80%",
      scrub:2,
    }
})