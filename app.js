// VARs
const bell = document.querySelector('#bell');
let wait = document.getElementsByTagName('#loading');

// BALLS OF THE SWINGER :
const leftBall = document.querySelector(".l");
const rightBall = document.querySelector(".r");
const a = document.querySelector(".a");
const bb = document.querySelector(".bb");

let loading =true;
let interval = 100;

interval += 200;

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
let x = true;
function Wave() {
         // swip up to Down:
      this.upDow = function(ball) {
            // initial position:
            setTimeout(function() {
                ball.style.transform = "translate(0px,6px) ";
            },100)

            setTimeout(function() {
               ball.style.transform = "translate(0px,-6px) ";
            },300)

            setTimeout(function() {
               ball.style.transform = "translate(0px,0px) ";
            },500)
      }
         // swip up:
     this.up = function(ball) {
            // initial position:
            setTimeout(function() {
               ball.style.transform = "translate(0px,6px) ";
            },700)

            setTimeout(function() {
               ball.style.transform = "translate(0px,0px) ";
            },900)
     }

     this.down = function(ball) {
            setTimeout(function() {
               ball.style.transform = "translate(0px,-6px) ";
            },1100)

            setTimeout(function() {
               ball.style.transform = "translate(0px,0px) ";
            },1300)
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
         ballLeft.upDow(leftBall);     
   
         const ballA = new Wave();
         ballA.up(a); 

         const ballB = new Wave();
         ballB.down(bb); 
      },1500)
          