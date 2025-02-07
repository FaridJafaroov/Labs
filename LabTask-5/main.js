
let click=document.querySelector(".first-part");
let textPart=document.querySelector(".bottom-part");

function clickFunction(){
    if(textPart.style.display==="none"){
        textPart.style.display="block";
    }
    else{
        textPart.style.display="none";
    }
    console.log(click)
  }

  click.addEventListener("click",clickFunction);






   




