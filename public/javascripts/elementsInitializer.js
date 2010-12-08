jQuery(document).ready(function() {
	if(document.getElementById('taxonomies')) {
		var child = document.getElementById('taxonomies').childNodes[1];
		if(child.className == 'current') {
			$('#taxonomies').tabs('#taxonomies div', {tabs: 'h3', effect: 'horizontal', initialIndex: 0});
		} else {
			$('#taxonomies').tabs('#taxonomies div', {tabs: 'h3', effect: 'horizontal', initialIndex: 1});
		}
	}
	if($('.info')) {		
		resizeFloatingElementWidth($('.info'), $('#content'), 70);
	}
	
//	if($('#content')) {
//		resizeFloatingElementHeight($('#content'), $(window), $('#header').height() + $('#footer').height());
//	}
});

// with timer for IE support
//var resizeTimer = null;
//$(window).resize(function() {
//	if(resizeTimer) clearTimeout(resizeTimer); 
//	resizeTimer = setTimeout("if($('.info')) resizeFloatingElementWidth($('.info'), $('#content'), 100 + 18);", 100);
//});

// without timer for more fluidity
$(window).resize(function() {
	if($('.info')) {
		resizeFloatingElementWidth($('.info'), $('#content'), 70);
	}
});



function resizeFloatingElementWidth(floatingElt, container, fixedSizeElt) {
	floatingElt.width( container.width() - fixedSizeElt );
}

//function resizeFloatingElementHeight(floatingElt, container, fixedSizeElt) {
//	floatingElt.height( container.height() - fixedSizeElt );
//}
