// VARs
const bell = document.querySelector('#bell');
let wait = document.getElementsByTagName('#loading');

// BALLS OF THE SWINGER :
const leftBall = document.querySelector(".l");
const rightBall = document.querySelector(".r");
const a = document.querySelector(".a");
const bb = document.querySelector(".bb");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const f = document.querySelector(".f");
const r = document.querySelector(".r");

let loading =true;

// CONSTRUCTOR FUNCTION :

function Icons() {
     this.fillArrow = function(id) {
               // repeat the transition every 1s:
        setInterval(function(){
               // get acces to the wanted icon and set the initial position:
            let arr = document.querySelector(`${id}`);
            arr.innerHTML = "&#xf103;"
            arr.style.paddingTop = "9px";
               // set the following position :
            setTimeout(function() {
               arr.style.paddingTop = "14px";
            }, 500)
        }, 1000)  
     }
     this.ringBell = function(id) {
        
           let arr = document.querySelector(`${id}`);
           arr.style.transform = "rotate(18deg)";

           setTimeout(function() {
            arr.style.transform = "rotate(-18deg)";
           },300)

           setTimeout(function() {
            arr.style.transform = "rotate(0deg)";
           },500)  
     }
     this.fillOur = function(id) {
        setInterval(function() {
            let arr = document.querySelector(`${id}`);
            arr.innerHTML = "&#xf251;";
            arr.style.transform = "rotate(0deg)";
          
         setTimeout(function() {
            arr.innerHTML = "&#xf252;";
         },500) 

         setTimeout(function() {
            arr.innerHTML = "&#xf253;";
         },1000) 

         setTimeout(function() {
            arr.style.transform = "rotate(180deg)";
         },1500)
        },2000)
        loading = false;
     }
} 
var interval = 100;

function Wave() {
         // swip up to Down:
      this.upDow = function(ball,inter) {
            // initial position:
            setTimeout(function() {
                ball.style.transform = "translate(0px,4px) ";
            },100)
            interval += 200;

            setTimeout(function() {
               ball.style.transform = "translate(0px,-4px) ";
            },300)
            interval += 200;

            setTimeout(function() {
               ball.style.transform = "translate(0px,0px) ";
            },500)
            interval += 200;
      }
         // swip up:
     this.up = function(ball,inter) {
            // initial position:
            setTimeout(function() {
               ball.style.transform = "translate(0px,4px) ";
            },400)
            interval += 200;

            setTimeout(function() {
               ball.style.transform = "translate(0px,0px) ";
            },600)
            interval += 200;
     }
         // swip down:
     this.down = function(ball,inter) {
            // initial position:
            setTimeout(function() {
               ball.style.transform = "translate(0px,-4px) ";
            },500)
            interval += 200;

            setTimeout(function() {
               ball.style.transform = "translate(0px,0px) ";
            },700)
            interval += 200;
     }
}

      // move the arrow up/down
const arrowR =  new Icons();
arrowR.fillArrow("#right");
      // move the arrow up/down
const arrowL = new Icons();
arrowL.fillArrow("#Left");

      // when click the bell:
bell.addEventListener("click", function(){
      //ring the bell:
   const bell = new Icons();
   bell.ringBell("#bell");
      // load the ourGlass:
      if(loading) {
         const our = new Icons();
         our.fillOur("#clockglass");
      }      
})

      // swing th balls:
      setInterval(function() {
         const ballLeft = new Wave();
         ballLeft.upDow(leftBall,interval);     
   
         const ballA = new Wave();
         ballA.up(a,interval); 

         const ballB = new Wave();
         ballB.down(bb,interval); 

         const ballc = new Wave();
         ballc.up(c,interval);

         const balld = new Wave();
         balld.down(d,interval);

         const ballf = new Wave();
         ballf.up(f,interval);

         const ballr = new Wave();
         ballr.upDow(r,interval);
      },800)
          