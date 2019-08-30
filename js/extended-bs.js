function run() {
  let elems = document.querySelectorAll("*");
  
  //Filter elements
  let scrollElems = filterElems(elems, "data-scroll", "link");  
  let activeElems = filterElems(elems, "data-toggle", "active");
  let spyElems = filterElems(elems, "data-animate", "scroll");  
  let countElems = filterElems(elems, "data-animate", "counter");
  let menu = filterElems(elems, "data-scroll", "navbar");
  let menuElems = pullMenuElems(menu);
  
  //Add listeners
  addEventListenerToList(scrollElems, "click", function(){smoothScroll(event);});
  addEventListenerToList(activeElems, "click", function(){toggleClass(event);});
  addEventListenerToList(menuElems, "click", function(){smoothScroll(event);});
  addEventListenerToList(countElems, "click", function(){animateCounter(event);});  
  
  //Window listener
  spyElems?checkPos(spyElems):false;
  window.addEventListener("scroll", function(){checkPos(spyElems);}, false);
}

//Helpers

function filterElems(elems, attribute, data) {
  let arr = [];
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].getAttribute(attribute) === data) {
      arr.push(elems[i]);
    }
  }
  return arr;
}

function addEventListenerToList(list, evt, func) {
  let arr = list;
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener(evt, func, false);
  }
}

function pullMenuElems(elems) {
  let arr = [];
  for (let i = 0; i < elems.length; i++) {    
    for (let j = 0; j < elems[i].childElementCount; j++) {
      arr.push(elems[i].children[j].children[i]);
    }
  }  
  return arr;
}

//Animate + change state functions

function smoothScroll(evt) {
  evt.preventDefault();
  
  let startElem = evt.currentTarget;  
  let id = startElem.getAttribute("href").replace("#","");
  
  if(!id){
    return;
  }
  
  let targetElem = document.getElementById(id);  
  let startPos = startElem.getBoundingClientRect().top;
  let targetPos = targetElem.getBoundingClientRect().top;  
  let len = Math.abs(startPos - targetPos);
  
  //Can play with timeinterval and parts, total animation timing is: time * parts
  let timeinterval = 10;
  let parts = 50;
  
  (len > 2500)?parts = parts + 50:parts;
  
  let inc = len / parts;
  let sum = 0;
  let i = 0;
  
  let scrollFunc = setInterval(
    function() {
      if (i == parts) {
        clearInterval(scrollFunc);
      }
      
      document.documentElement.scrollTop = startPos + sum;
      
      if (startPos > targetPos) {
        sum -= inc;
      } 
      else {
        sum += inc;
      }   
      
      i++;
      
    }, timeinterval);
}

function toggleClass (evt) {
  let elem = evt.currentTarget;
  let myClass = elem.getAttribute("data-toggle");
  
  if (elem.getAttribute("data-target")) {
    
    let elems = [];
    elems = document.querySelectorAll(elem.getAttribute("data-target"));
    
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].classList) {
        elems[i].classList.toggle(myClass);
      }
      else {
        let arr = elems[i].className.split(" ");
        let ind = arr.indexOf(myClass);
        
        if (ind >= 0) {
          arr.splice(ind, 1);
        }
        else {
          arr.push(myClass);
          elems[i].className = arr.join(" ");
        }
      }
    }
    
    return;
  }
  
  else if (elem.classList) {
    elem.classList.toggle(myClass);
  }
  
  else {
    let arr = elem.className.split(" ");
    let i = arr.indexOf(myClass);
    
    if (i >= 0) {
      arr.splice(i, 1);
    }
    else {
      arr.push(myClass);
      elem.className = arr.join(" ");
    }
  }
}

function checkPos(elems) {  
  let elemPos = [];
  let curr = [];
  
  for (let i = 0; i < elems.length; i++) {
    if (window.scrollY) {
      elemPos[i] = elems[i].getBoundingClientRect().top + window.scrollY;
      curr[i] = window.innerHeight + window.scrollY;
    }
    else{
      elemPos[i] = elems[i].getBoundingClientRect().top + document.documentElement.scrollTop;
      curr[i] = window.innerHeight + document.documentElement.scrollTop;
    }
    if (curr[i] > (elemPos[i] + (elems[i].offsetHeight / 4))) {
      addClassToElem(elems[i], "active");
    }
  }
  
}

function addClassToElem (elem, myClass) {
  if (elem.clasList) {
    elem.classList.add(myClass);
  }
  else {
    let arr = elem.className.split(" ");
    let i = arr.indexOf(myClass);
    if (i == -1) {
      arr.push(myClass);
      elem.className = arr.join(" ");
    }
  }
}

function animateCounter() {

}

window.onload = run;