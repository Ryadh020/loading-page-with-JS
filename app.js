// get access to the arrows:
 /*let arrowL = document.querySelector('#Left');
 arrowL.innerHTML = "&#xf103;"*/

 function Arrow(id) {
     this.fill = function(id) {
        const type = document.querySelector(`#${id}`);
        type.innerHTML = "&#xf103;"
     }
} 
let arrowR = document.querySelector('#right');
 arrowR =  new Arrow(arrowR,"right");
arrowR.fill;
/*
 let arrowR = document.querySelector('#right');
 arrowR.innerHTML = "&#xf103;"*/
 