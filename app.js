// VARs
const bell = document.querySelector('#bell');
let wait = document.getElementsByTagName('#loading');
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
 
