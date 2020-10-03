// bezier path for each satellite

const flightPath = {
    curviness: 1.25,
    autoRotate:false,
    values: [
        {x:400,y:-20},
        {x:window.outerWidth - window.outerWidth/4,y:-20},
        // {x:window.outerWidth - 350,y:-20},

        
        

    ]
}

const flightPath2= {
    curviness: 1.25,
    autoRotate:false,
    values: [
        {x:400,y:-20},
        {x:window.outerWidth - window.outerWidth/2.3,y:-150},
        // {x:window.outerWidth - 350,y:-20},

        
        

    ]
}

const flightPath3= {
    curviness: 1.25,
    autoRotate:false,
    values: [
        {x:400,y:-20},
        {x:window.outerWidth - window.outerWidth/1.9,y:150},
        // {x:window.outerWidth - 350,y:-20},

        
        

    ]
}

const flightPath4= {
    curviness: 1.25,
    autoRotate:false,
    values: [
        {x:400,y:-20},
        {x:window.outerWidth - window.outerWidth/1.5,y:-130},
        // {x:window.outerWidth - 350,y:-20},

        
        

    ]
}

const flightPath5= {
    curviness: 1.25,
    autoRotate:false,
    values: [
        {x:400,y:-20},
        {x:window.outerWidth - window.outerWidth/1.2,y:100},
        // {x:window.outerWidth - 350,y:-20},

        
        

    ]
}

const flightPath6= {
    curviness: 1.25,
    autoRotate:false,
    values: [
        {x:400,y:-20},
        {x:window.outerWidth - window.outerWidth/1.15,y:-100},
        // {x:window.outerWidth - 350,y:-20},

        
        

    ]
}




const movePath = {
    curviness:1.25,
    autoRotate:false,
    values: [
        {x:0,y:window.outerHeight}
    ]
}

const tween = new TimelineLite();


tween.add(

    TweenLite.to('.issSelector',0.1, {
        // bezier: flightPath,
        height:"100vh",

        
        ease:Power1.easeInOut
        
    })
)

tween.add(

    TweenLite.to('.paleDot',10, {
        bezier: movePath,
        // scale:100,
        opacity:0,

        
        ease:Power1.easeInOut
        
    })
)

tween.add(

    TweenLite.to('.issInfoCardWrapper',10, {
        delay:10,
        // bezier: flightPath,
        y:100,
        opacity:0,

        
        ease:Power1.easeInOut
        
    })
)



tween.add(

    TweenLite.to('.paper',10, {
        delay:10,
        // bezier: flightPath,
        scale:100,
        opacity:0,

        
        ease:Power1.easeInOut
        
    })
)

tween.add(
    TweenLite.to('.satellite',1, {
        bezier: flightPath,
        scale:2,
    })
    
    
)
tween.add(
    TweenLite.to('.satellite2',1, {
        bezier: flightPath2,
        scale:1.3,
    })
)


tween.add(
    TweenLite.to('.satellite3',1, {
        bezier: flightPath3,
        scale:2,
    }, 0)
    
    
)

tween.add(
    TweenLite.to('.satellite4',1, {
        bezier: flightPath4,
        scale:2,
    }, 0)
    
    
)

tween.add(
    TweenLite.to('.satellite5',1, {
        bezier: flightPath5,
        scale:1.3,
    }, 0)
    
    
)

tween.add(
    TweenLite.to('.satellite6',1, {
        bezier: flightPath6,
        scale:1.3,
    }, 0)
    
    
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


// Click events
let aqua = document.getElementById('aqua')
let aura = document.getElementById('aura')
let loader = document.getElementById('loader')



aqua.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/aqua-about.html'
    loader.classList.remove('anim')

}, 800)
    
}

aura.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/aura-about.html'
    loader.classList.remove('anim')

}, 800)
  
}

calipso.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/calipso-about.html'
    loader.classList.remove('anim')

}, 800)
}

cloudsat.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/cloudsat-about.html'
    loader.classList.remove('anim')

}, 800)
}

oco.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/oco2-about.html'
    loader.classList.remove('anim')

}, 800)
}

// Page animations

var x = document.getElementsByClassName('smoothLink')


