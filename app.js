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
      this.upDow = function(ball) {
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
     this.up = function(ball) {
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
     this.down = function(ball) {
            // initial position:
            setTimeout(function() {
               ball.style.transform = "translate(0px,-4px) ";
            },500)
            interval += 200;

            setTimeout(function() {
               ball.style.transform = "translate(0px,0px) ";
            },700)

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

            // initial position:
            setTimeout(function() {
               leftBall.style.transform = "translate(0px,4px) ";
            },100)

            setTimeout(function() {
               leftBall.style.transform = "translate(0px,-4px) ";
            },300)

            setTimeout(function() {
               leftBall.style.transform = "translate(0px,0px) ";
            },500)

         // swip up:

            // initial position:
            setTimeout(function() {
               a.style.transform = "translate(0px,4px) ";
            },400)

            setTimeout(function() {
               a.style.transform = "translate(0px,0px) ";
            },600)

         // swip down:

            // initial position:
            setTimeout(function() {
               bb.style.transform = "translate(0px,-4px) ";
            },500)

            setTimeout(function() {
               bb.style.transform = "translate(0px,0px) ";
            },700)

            // swip up:

            // initial position:
            setTimeout(function() {
               c.style.transform = "translate(0px,4px) ";
            },600)

            setTimeout(function() {
               c.style.transform = "translate(0px,0px) ";
            },800)

            // swip down:

            // initial position:
            setTimeout(function() {
               d.style.transform = "translate(0px,-4px) ";
            },700)

            setTimeout(function() {
               d.style.transform = "translate(0px,0px) ";
            },900)

            // swip up:

            // initial position:
            setTimeout(function() {
               f.style.transform = "translate(0px,4px) ";
            },800)

            setTimeout(function() {
               f.style.transform = "translate(0px,0px) ";
            },1000)

            // swip down:

            // initial position:
            setTimeout(function() {
               r.style.transform = "translate(0px,-4px) ";
            },900)

            setTimeout(function() {
               r.style.transform = "translate(0px,0px) ";
            },1100)
         
         },1200)
         /*
         const ballLeft = new Wave();
         ballLeft.upDow(leftBall);     
   
         const ballA = new Wave();
         ballA.up(a); 

         const ballB = new Wave();
         ballB.down(bb); 

         const ballc = new Wave();
         ballc.up(c);

         const balld = new Wave();
         balld.down(d);

         const ballf = new Wave();
         ballf.up(f);

         const ballr = new Wave();
         ballr.upDow(r);
         */
    
          