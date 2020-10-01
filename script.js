const flightPath = {
    curviness: 1.25,
    autoRotate:true,
    values: [
        {x:400,y:-20},
        {x:window.innerWidth - 250,y:-20},

        
        

    ]
}


const tween = new TimelineLite();

tween.add(

    TweenLite.to('.paper',1, {
        // bezier: flightPath,
        scale:100,

        
        ease:Power1.easeInOut
        
    })
)

tween.add(
    TweenLite.to('.satellite',1, {
        bezier: flightPath,
        scale:2,
    })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration:1000,
    triggerHook: 0
})
.setTween(tween)
.setPin('.animation')
.addTo(controller)



let satellite = document.getElementById('satellite')


satellite.onclick = () => {
    alert("I am a satellite")
}