const clouds = document.getElementById("clouds");
const behind = document.getElementById("behind");
const front = document.getElementById("front");
const logo = document.getElementById("logo");
const white = document.getElementById("white");
const stand  = document.getElementById("stand");
const bird  = document.getElementById("bird");


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    clouds.style.marginTop = value * 1 + 'px';
    behind.style.marginTop = value * 0.65 + 'px';
    front.style.marginTop = value * -0.005 + 'px';
    logo.style.marginTop = value * 1.9 + 'px';
    white.style.marginTop = value * 0.9 + 'px';
    stand.style.marginTop = value * -0.005 + 'px';
    bird.style.marginTop = value * -0.005 + 'px';
    bird.style.marginLeft = value * 1.005 + 'px';
  logo.style.marginBottom = value * 0.3  + 'px';
      logo.style.letterSpacing = value * 0.2 + 'px'
   
})


function changeBackground(){
    if(window.scrollY > window.innerHeight/1.55){
     const sc = document.getElementById("duct");
     sc.classList.add('active');
    }
    else{
        const sc = document.getElementById("duct");
     sc.classList.remove('active');
    }
   
}

window.addEventListener('scroll', changeBackground);

 function change(){
    if(window.scrollY > window.innerHeight/2.73){
      const elon = document.getElementById("elonm");
     elon.classList.add('active');
    }
    else{
         const elon = document.getElementById("elonm");
      elon.classList.remove('active');
     }
   
 }

 window.addEventListener('scroll', change);


 window.onload = function() {
    lax.setup() // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}

