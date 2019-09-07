window.addEventListener("load", run, false);

function run() {  
  let elems = document.querySelectorAll("*");
  var body = document.querySelector("body");
  
  if(typeof body.style.WebkitAnimationName === "undefined" || typeof body.style.animationName === "undefined") {
    alert("Animation CSS keyframes not supported");
    console.log("Animation CSS keyframes not supported");
    var css = document.createElement("style");
    css.type = "text/css";
    
    var styles = "*[class*=\"ani-fade\"]{opacity: 1 !important;}";
    css.appendChild(document.createTextNode(styles));
    
    document.getElementsByTagName("head")[0].appendChild(css);    
  }
  
  //Filter elements
  let scrollElems = filterElems(elems, "data-animate", "scroll");
  let linkElems = filterElems(elems, "data-animate", "link-scroll");
  let menu = filterElems(elems, "data-animate", "navbar-scroll");
  let menuElems = pullMenuElems(menu);
  let countElems = filterElems(elems, "data-animate", "counter");  
  let activeElems = filterElems(elems, "data-toggle", "active");
  
  //Initial status on page refresh
  scrollElems?getPos(scrollElems):false;
  countElems?getPos(countElems):false;
  
  //Add listeners  
  addEventListenerToList(linkElems, "click", function(){smoothScroll(event);});
  addEventListenerToList(activeElems, "click", function(){toggleClass(event);});
  addEventListenerToList(menuElems, "click", function(){smoothScroll(event);});
  addEventListenerToList(countElems, "scrolled", function(){animateCounter(event);});
  
  //Window listeners
  window.addEventListener("scroll", function(){getPos(scrollElems);}, false);
  window.addEventListener("scroll", function(){getPos(countElems);}, false);
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

function addClass (elem, myClass) {
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

function callOnce(func) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      return func();
    }
    else {
      return;
    }
  }
}

function createNewEvent(evtName) {
  let evt;
  if (typeof Event === "function") {
    evt = new Event(evtName);
  }
  else {
    evt = document.createEvent("Event");
    evt.initEvent(evtName, true, true);
  }
  
  return evt;
}

//Animate + change state functions

function getPos(elems) {  
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
      addClass(elems[i], "active");
      let evt = createNewEvent("scrolled");
      elems[i].dispatchEvent(evt);
    }
  }
  
}

function smoothScroll(evt) {
  evt.preventDefault();
      
  let startElem = evt.currentTarget;  
  if(!startElem.getAttribute("href")){
    return;
  }
  let id = startElem.getAttribute("href").replace("#","");    
  let targetElem = document.getElementById(id);  
  let startPos = startElem.getBoundingClientRect().top + document.documentElement.scrollTop;
  let targetPos = targetElem.getBoundingClientRect().top + document.documentElement.scrollTop;  
  let len = Math.abs(startPos - targetPos);
  
  //Can play with timeinterval and parts, total animation timing is: time * parts
  let timeinterval = 10;
  let parts = 50;
  
  let inc = Math.round(len / parts);
  let sum = 0;
  
  let scrollFunc = setInterval(
    function() {
      if (Math.abs(sum) >= len) {
        document.documentElement.scrollTop = targetPos;
        clearInterval(scrollFunc);
      }
      
      document.documentElement.scrollTop = startPos + sum;
      
      if (startPos > targetPos) {
        sum -= inc;        
      } 
      else {
        sum += inc;
      }
      
    }, timeinterval);
}

function toggleClass(evt) {
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

function animateCounter(evt) {
  let elem = evt.currentTarget;
  let numb = parseInt(elem.innerText);
  
  //Can play with timeinterval and parts, animation duration is equals to: time * parts
  let timeinterval = 50;
  let parts = 25;
  
  let inc = Math.round(numb / parts);
  let sum = 0;
  
  //Check if element has "finish" class
  let arr = elem.className.split(" ");
  let ind = arr.indexOf("finish");
  
  //If element doesn't has "finish" class play animation
  if (ind == -1) {
    //Add a "finish" class to the element and start counter
    addClass(elem, "finish");
    let timer = setInterval(
      function(){
        if (sum > numb) {
          sum = numb;
          elem.innerText = sum;          
          clearInterval(timer);          
        }
        
        elem.innerText = sum;
        sum += inc;
      }, timeinterval);
  }
  else {
    return;
  }
}