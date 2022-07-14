/** 
 * @author: jango_blockchained
 * @package: xtender
 */

var fontSizeArray = [];
(function ($) {
  $(document).ready(function(){
	AddFullsizeBtn();   
	AddEventListenerToBTN1();
  });
}(jQuery));

function AddFullsizeBtn() {
	var node = document.createElement("LI");
	var a_tag = document.createElement("A");
	a_tag.setAttribute('id','fullsizebtn');
	var t = document.createTextNode("Fullsize View");
	a_tag.appendChild(t);
	node.appendChild(a_tag);
	document.getElementById("toolbar-user").insertBefore(node, document.getElementById("toolbar-user").getElementsByClassName("vertical-bar")[0]);
}

function GoFullsize() {
	//askForResizeFont();
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
	// goBackToOldSizes();
	AddEventListenerToBTN1();
}

// function getAllFontSizes(size) {
// 	fontSizeArray = [];
// 	var elements = $("#body_div").find("*");
// 	elements.each(function() {
// 		var obj = {
// 				element: $(this).prop('tagName'),
// 				originalSize: $(this).css("font-size")
// 			};
// 		fontSizeArray.push(obj);
// 		if (size > 100) {
// 			if ($(this).hasClass("octicon")) {
// 				if (size >= 115) {
// 					$(this).css("font-size", ((parseInt($(this).css("font-size"))/100)*115));
// 					//$(this).css("font-size", "14px");
// 				}
// 			} else if ($(this).hasClass("menu-btn-group-label")||
// 			$(this).parent().hasClass("indicator")) {
// 				//nothing
// 			} else {
// 				if ($(this).prop('tagName') == "A"||
// 				$(this).prop('tagName') == "SPAN"||
// 				$(this).prop('tagName') == "P"||
// 				$(this).hasClass("new-filter")||
// 				$(this).hasClass("h6 stat-label")||
// 				$(this).hasClass("toggle-filter")||
// 				$(this).hasClass("remove-filter")) {
// 					$(this).css("font-size", ((parseInt($(this).css("font-size"))/100)*size));
// 				}
// 			}
// 		}
// 	});
// }

function goBackToOldSizes() {
	var elements = $("#body_div").find("*");
	elements.each(function(index) {
		$(this).css("font-size", "");
	});
}

function askForResizeFont() {
	frappe.prompt([
			{'fieldname': 'size', 'fieldtype': 'Int', 'label': 'New Font-Size in %:', 'reqd': 1, 'default': '100'}  
		],
		function(data){
			if (parseInt(data.size) > 100) {
				frappe.show_alert("New Font-Size: "+data.size+"%", 5);
			} else {
				frappe.show_alert("New Font-Size smaller than 100% - no change triggered!", 5);
			}
			/* var sheet = document.createElement('style')
			sheet.setAttribute('id','fullsizestyle');
			sheet.innerHTML = ".container {width: 100% !important;}";
			document.body.appendChild(sheet);
			getAllFontSizes(parseInt(data.size));
			prepareBackToNormalView(); */
		},
		'Set optionally new Font-Size',
		'Set'
	)
}


/** Window Fullsize */

function goFullscreen(element) {
    if(element.requestFullscreen)
        element.requestFullscreen();
    else if(element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if(element.msRequestFullscreen)
        element.msRequestFullscreen();
}

function exitFullscreen() {
    if(document.exitFullscreen)
        document.exitFullscreen();
    else if(document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if(document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else if(document.msExitFullscreen)
        document.msExitFullscreen();
}

function isFullscreen() {
    var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;

    if(full_screen_element === null)
        return false;
    else
        return true;
}

$("#enter-fullscreen").on('click', function() {
    if(isFullscreen())
        exitFullscreen();
    else
        goFullscreen($("#demo-element").get(0));
});

$(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
    if(isFullscreen()) {
        $("#demo-element span").text('Full Screen Mode Enabled');
        $("#enter-fullscreen").text('Disable Full Screen');
    }
    else {
        $("#demo-element span").text('Full Screen Mode Disabled');
        $("#enter-fullscreen").text('Enable Full Screen');
    }
});

// $(document).ready(function(){
//     $('.nav.navbar-nav.navbar-right').append('<li><a class"dropdown-toggle" href="#" data--toggle="dropdown" title="Hi" onclick="return false">Hi</a></li>')
// });