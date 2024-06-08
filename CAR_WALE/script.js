// locomotive js and scrollTrigger both work together
// locomotive js is for smooth scrolling
// scrollTrigger is for Animation while scrolling
function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });
}
locoscroll()


// js for Animation
// gsap is for Animation
function h1Animation(){
    gsap.from("#page .h1_1",{
        opacity:0,
        delay:0.3,
        y:100,
        duration:0.6,
        stagger:0.3
    })
}
h1Animation()

function imgAnimation(){
    gsap.from("#page .img_1",{
        opacity:0,
        y:100,
        duration:2
    })
}
imgAnimation()

function imgtextcontainer_1Animation(){
var imgtextcont=document.querySelector("#imgtextcontainer_1")
var img=document.querySelector("#imgtextcontainer_1 img")
imgtextcont.addEventListener("mouseenter",function(){
    gsap.to(img,{
        height:77+"vh",
        width:31.5+"vw",
        duration:0.5
    })
})
imgtextcont.addEventListener("mouseleave",function(){
    gsap.to(img,{
        height:73+"vh",
        width:30+"vw",
        duration:0.5
    })
})
}
imgtextcontainer_1Animation()

function imgtextcontainer_2Animation(){
var imgtextcont=document.querySelector("#imgtextcontainer_2")
var img=document.querySelector("#imgtextcontainer_2 img")
imgtextcont.addEventListener("mouseenter",function(){
    gsap.to(img,{
        height:82+"vh",
        width:34.5+"vw",
        duration:0.5
    })
})
imgtextcont.addEventListener("mouseleave",function(){
    gsap.to(img,{
        height:78+"vh",
        width:33+"vw",
        duration:0.5
    })
})
}
imgtextcontainer_2Animation()
function imgtextcontainer_3Animation(){
    var imgtextcont=document.querySelector("#imgtextcontainer_3")
    var img=document.querySelector("#imgtextcontainer_3 img")
    imgtextcont.addEventListener("mouseenter",function(){
        gsap.to(img,{
            height:76+"vh",
            width:31.5+"vw",
            duration:0.5
        })
    })
    imgtextcont.addEventListener("mouseleave",function(){
        gsap.to(img,{
            height:70+"vh",
            width:30+"vw",
            duration:0.5
        })
    })
    }
imgtextcontainer_3Animation()
function imgtextcontainer_4Animation(){
        var imgtextcont=document.querySelector("#imgtextcontainer_4")
        var img=document.querySelector("#imgtextcontainer_4 img")
        imgtextcont.addEventListener("mouseenter",function(){
            gsap.to(img,{
                height:75+"vh",
                width:31.5+"vw",
                duration:0.5
            })
        })
        imgtextcont.addEventListener("mouseleave",function(){
            gsap.to(img,{
                height:70+"vh",
                width:30+"vw",
                duration:0.5
            })
        })
}

imgtextcontainer_4Animation()
function popularAnimation(){
    gsap.from("#popular #heading_1",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:"#popular #heading_1",
        scroller:"#main",
        start:"top 50%",
        end:"top 20%",
        scrub:2
    }
})
gsap.from("#imgtextcontainer_1 a img",{
    y:90,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_1 a img",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_2 a img",{
    y:90,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_1 a img",
        scroller:"#main",
        start:"top 65%",
        end:"top 10%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_3 a img",{
    y:90,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_3 a img",
        scroller:"#main",
        start:"top 78%",
        end:"top 20%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_4 a img",{
    y:90,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_4 a img",
        scroller:"#main",
        start:"top 65%",
        end:"top 20%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_1 #h1_3",{
    y:80,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_1 #h1_3",
        scroller:"#main",
        start:"top 110%",
        end:"top 95%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_1 #h1_4",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_1 #h1_4",
        scroller:"#main",
        start:"top 100%",
        end:"top 95%",
        scrub:2
    }
})
gsap.from("#imgtextcontainer_2 #h1_3",{
    y:80,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_2 #h1_3",
        scroller:"#main",
        start:"top 115%",
        end:"top 100%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_2 #h1_4",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_2 #h1_4",
        scroller:"#main",
        start:"top 110%",
        end:"top 98%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_3 #h1_3",{
    y:80,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_3 #h1_3",
        scroller:"#main",
        start:"top 110%",
        end:"top 100%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_3 #h1_4",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_3 #h1_4",
        scroller:"#main",
        start:"top 105%",
        end:"top 98%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_4 #h1_5",{
    y:80,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_4 #h1_5",
        scroller:"#main",
        start:"top 107%",
        end:"top 100%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_4 #h1_6",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_4 #h1_6",
        scroller:"#main",
        start:"top 105%",
        end:"top 100%",
        scrub:1
    }
})}
popularAnimation()


function trendingAnimation(){
    gsap.from("#trending #heading_1",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:"#trending #heading_1",
        scroller:"#main",
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from("#imgtextcontainer_5 img",{
    y:90,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_5 img",
        scroller:"#main",
        start:"top 90%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_5 #h1_7",{
    y:70,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_5 #h1_7",
        scroller:"#main",
        start:"top 78%",
        end:"top 68%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_5 #h1_8",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_5 #h1_8",
        scroller:"#main",
        start:"top 78%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#trending #morebutton",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#trending #morebutton",
        scroller:"#main",
        start:"top 85%",
        end:"top 70%",
        scrub:1
    }
})}
trendingAnimation()
function newlaunchedAnimation(){
    gsap.from("#newlaunched #heading_1",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:"#newlaunched #heading_1",
        scroller:"#main",
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from("#imgtextcontainer_6 img",{
    y:90,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_6 img",
        scroller:"#main",
        start:"top 88%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_6 #h1_9",{
    y:70,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_6 #h1_9",
        scroller:"#main",
        start:"top 80%",
        end:"top 69%",
        scrub:1
    }
})
gsap.from("#imgtextcontainer_6 #h1_10",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#imgtextcontainer_6 #h1_10",
        scroller:"#main",
        start:"top 75%",
        end:"top 66%",
        scrub:1
    }
})
gsap.from("#newlaunched #morebutton",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger:"#newlaunched #morebutton",
        scroller:"#main",
        start:"top 80%",
        end:"top 74%",
        scrub:1
    }
})
}
newlaunchedAnimation()
function findcarAnimation(){
gsap.from("#findcar ",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#findcar ",
        scroller:"#main",
        start:"top 78%",
        end:"top 60%",
        scrub:2
    }
})
}
findcarAnimation()
function sellcarAnimation(){
    gsap.from("#sellcar ",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:"#sellcar ",
            scroller:"#main",
            start:"top 78%",
            end:"top 60%",
            scrub:2
        }
    })
    }
sellcarAnimation()
