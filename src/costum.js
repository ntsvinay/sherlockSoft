
function commonFun(cond)
{
  navSize = document.getElementById("mySidenav").style.width;
  if (navSize == "350px") {
    
    return closeNav();
    
}
if(cond=="open"){
return openNav();
}
}

function openNav() {

  // var sidebar=false;

  
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("mySidenav").style.height = "94vh";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)"

  // var hdr = document.getElementById("header");
  // hdr.style.position="fixed";footerComp

  var vid = document.getElementById("homePageVideo"); 
  vid.pause();
  var element = document.getElementById("fullPage");
  element.classList.add("blur");
  element.style.position="fixed";
  element.style.overflow="hidden";
  element.onwheel=function(){ return false; }
  document.body.classList.add("stop-scrolling");
  //   var footrtComp = document.getElementById("footerComp");
  // footrtComp.style.position="fixed";
//     setTimeout(function() {
//       element.classList.remove("blur");
//     });
 }

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  var vid = document.getElementById("homePageVideo");
  vid.play();
  var element = document.getElementById("fullPage");
  element.style.position="inherit";
  element.classList.remove("blur");
  document.body.classList.remove("stop-scrolling"); 
  element.onwheel=function(){ return true; }
}