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
} 

const arrowR =  new Icons();
arrowR.fillArrow("#right");


const arrowL = new Icons();
arrowL.fillArrow("#Left");



/*
 let arrowR = document.querySelector('#right');
 arrowR.innerHTML = "&#xf103;"*/


 /*let arrowR = document.querySelector('#right');*/
 
 // get access to the arrows:
 /*let arrowL = document.querySelector('#Left');
 arrowL.innerHTML = "&#xf103;"*/
