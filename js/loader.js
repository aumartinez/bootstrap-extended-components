//JS loader

let rotate;
let loader = function() {
  let div = document.createElement("div");
  
  div.style.position = "fixed";
  div.style.backgroundColor = "#ffffff";
  div.style.height = "100%";
  div.style.width = "100%";
  div.style.zIndex = 1;
  div.style.overflow = "hidden";
   
  document.getElementsByTagName("html")[0].appendChild(div);
  
  let inDiv = document.createElement("div");
  
  inDiv.style.height = "100px";
  inDiv.style.width = "100px";  
  inDiv.style.position = "absolute";
  inDiv.style.left = 0;
  inDiv.style.right = 0;
  inDiv.style.marginLeft = "auto";
  inDiv.style.marginRight = "auto";
  inDiv.style.top = "35%";
  inDiv.style.borderTop = "solid 10px #ccc";
  inDiv.style.borderLeft = "solid 10px #e7e7e7";
  inDiv.style.borderRight = "solid 10px #e7e7e7";
  inDiv.style.borderBottom = "solid 10px #e7e7e7";
  inDiv.style.borderRadius = "50%";
  
  document.getElementsByTagName("div")[0].appendChild(inDiv);
  
  let time = 10;
  let deg = 0;
  let inc = 5;
  
  let rotate = setInterval(
    function(){
      inDiv.style.transform = "rotate(" + deg + "deg)";
      deg += inc;
    }
  , time);
};

function stop() {
  clearInterval(rotate);
  let div = document.getElementsByTagName("div")[0];
  div.parentNode.removeChild(div);
}

loader();

window.addEventListener("load", stop, false);