/** 
 * @author: jango_blockchained
 * @package: xtender
 */

(function ($) {
  $(document).ready(function(){
	AddFullsizeBtn();   
	AddEventListenerToBTN1();
  });
}(jQuery));

function AddFullsizeBtn() {
	var a_tag = document.createElement("A");
	a_tag.setAttribute('id','fullsizebtn');
	a_tag.setAttribute('class','dropdown-item');
	var t = document.createTextNode("Fullsize View");
	a_tag.appendChild(t);
	let parent = document.getElementById("toolbar-user");
	parent.insertBefore(a_tag, parent.lastChild);
}

// Fullsize

function GoFullsize() {
	var sheet = document.createElement('style')
	sheet.setAttribute('id','fullsizestyle');
	sheet.innerHTML = ".container {width: 100% !important;}";
	document.body.appendChild(sheet);
	prepareBackToNormalView();
}

function AddEventListenerToBTN1() {
	document.getElementById("fullsizebtn").onclick = function() {GoFullsize()};
}

function AddEventListenerToBTN2() {
	document.getElementById("fullsizebtn").onclick = function() {BackToNormalView()};
}

function prepareBackToNormalView() {
	document.getElementById("fullsizebtn").innerHTML="Normal View";
	AddEventListenerToBTN2();
}

function BackToNormalView() {
	var sheetToBeRemoved = document.getElementById('fullsizestyle');
	var sheetParent = sheetToBeRemoved.parentNode;
	sheetParent.removeChild(sheetToBeRemoved);
	document.getElementById("fullsizebtn").innerHTML="Fullsize View";
	AddEventListenerToBTN1();
}

// Fullscreen

document.addEventListener("keydown", function(e) {
  if (e.key === "°") {
    toggleFullScreen();
  }
}, false);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}