window.addEventListener("load", run, false);

function run() {
 let elems = document.querySelectorAll("*"); 
 let imgs = document.querySelectorAll("img");
  
 for (let i = 0; i < imgs.length ; i++) {   
   let regEx = /\^media_src_(.*?)\^/;
   let str = imgs[i].getAttribute("src");

   let imgSrc = regEx.exec(str);
   
   if (!imgSrc) {
     continue;
   }
   
   str = "img/" + imgSrc[1];   
   imgs[i].setAttribute("src", str);
 }
 
 for (let i = 0; i < elems.length; i++) {
   let styles = getComputedStyle(elems[i], null);
   
   if (styles.backgroundImage !== "none") {
     let imgSrc = styles.backgroundImage;
     let regEx = /url\((.*?)\)/;
     let remEx = /\"|\'|media_src_|\%5E/g;
     
     let str = regEx.exec(imgSrc);     
     let arr = str[1].split("/");
     
     str = arr[(arr.length - 1)].replace(remEx,"");     
     elems[i].style.backgroundImage = "url('img/" + str + "')";
   }
 }
  
}