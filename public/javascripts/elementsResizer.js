//$(window).resize(function() {
//	resizeFloatingElement($('.info'), $('#content'), 100);
//});

jQuery(document).ready(function() {
	if($('.info')) {
		resizeFloatingElement($('.info'), $('#content'), 100);
	}
});

var resizeTimer = null;
$(window).resize(function() {
	if(resizeTimer) clearTimeout(resizeTimer);
	resizeTimer = setTimeout("resizeFloatingElement($('.info'), $('#content'), 100);", 100);
});


function resizeFloatingElement(floatingElt, container, fixedSizeElt) {
	floatingElt.width( container.width() - fixedSizeElt );
}
