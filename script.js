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
        {x:window.outerWidth - window.outerWidth/1.9,y:40},
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

    TweenLite.to('.ATrainWrapper',3, {
        delay:10,
        // bezier: flightPath,
        opacity:1,

        
        ease:Power1.easeInOut
        
    }, '-=10')
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

tween.add(

    TweenLite.to('.ATrainWrapper',10, {
        delay:10,
        // bezier: flightPath,
        opacity:0,

        
        ease:Power1.easeInOut
        
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


// Click events
let aqua = document.getElementById('aqua')
let aura = document.getElementById('aura')
let loader = document.getElementById('loader')



aqua.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/aqua-about.html'
    loader.classList.remove('anim')

}, 1100)
    
}

aura.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/aura-about.html'
    loader.classList.remove('anim')

}, 1100)
  
}

calipso.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/calipso-about.html'
    loader.classList.remove('anim')

}, 1100)
}

cloudsat.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/cloudsat-about.html'
    loader.classList.remove('anim')

}, 1100)
}

oco.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/oco2-about.html'
    loader.classList.remove('anim')

}, 1100)
}

gcom.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/gcomw1-about.html'
    loader.classList.remove('anim')

}, 1100)
}

gcom.onclick = () => {
    loader.classList.add('anim')
    setTimeout(() => {window.location.href = './includes/gcomw1-about.html'
    loader.classList.remove('anim')

}, 800)
}

// Page animations

var x = document.getElementsByClassName('smoothLink')

// Tooltips

var aquaTip = document.getElementById('aquaTool');
var auraTip = document.getElementById('auraTool');
var calipsoTip = document.getElementById('calipsoTool');
var cloudsatTip = document.getElementById('cloudsatTool');
var ocoTip = document.getElementById('ocoTool');
var gcomTip = document.getElementById('gcomTool');



aqua.onmouseover = () => {
    aquaTip.style.opacity = 1
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        aquaTip.style.top = (y + 20) + 'px';
        aquaTip.style.left = (x + 20) + 'px';
    };
    

}

aura.onmouseover = () => {
    auraTip.style.opacity = 1
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        auraTip.style.top = (y + 20) + 'px';
        auraTip.style.left = (x + 20) + 'px';
    };
    

}

calipso.onmouseover = () => {
    calipsoTip.style.opacity = 1
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        calipsoTip.style.top = (y + 20) + 'px';
        calipsoTip.style.left = (x + 20) + 'px';
    };
    

}

cloudsat.onmouseover = () => {
    cloudsatTip.style.opacity = 1
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        cloudsatTip.style.top = (y + 20) + 'px';
        cloudsatTip.style.left = (x + 20) + 'px';
    };
    

}

oco.onmouseover = () => {
    ocoTip.style.opacity = 1
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        ocoTip.style.top = (y + 20) + 'px';
        ocoTip.style.left = (x + 20) + 'px';
    };
    

}
gcom.onmouseover = () => {
    gcomTip.style.opacity = 1
    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        gcomTip.style.top = (y + 20) + 'px';
        gcomTip.style.left = (x + 20) + 'px';
    };
    

}

aqua.onmouseleave = () => {
    aquaTip.style.opacity = 0


}
aura.onmouseleave = () => {
    auraTip.style.opacity = 0


}
calipso.onmouseleave = () => {
    calipsoTip.style.opacity = 0


}
cloudsat.onmouseleave = () => {
    cloudsatTip.style.opacity = 0


}
oco.onmouseleave = () => {
    ocoTip.style.opacity = 0


}
gcom.onmouseleave = () => {
    gcomTip.style.opacity = 0


}



