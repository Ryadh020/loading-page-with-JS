// VARs
const bell = document.querySelector('#bell');

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
} 

      // move the arrow up/down
const arrowR =  new Icons();
arrowR.fillArrow("#right");
      // move the arrow up/down
const arrowL = new Icons();
arrowL.fillArrow("#Left");

      // ring the bell:
bell.addEventListener("click", function(){
   const bell = new Icons();
   bell.ringBell("#bell");
})


/*
 let arrowR = document.querySelector('#right');
 arrowR.innerHTML = "&#xf103;"*/


 /*let arrowR = document.querySelector('#right');*/
 
 // get access to the arrows:
 /*let arrowL = document.querySelector('#Left');
 arrowL.innerHTML = "&#xf103;"*/
