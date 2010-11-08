jQuery(document).ready(function() {
	if($('#taxonomies')) {
		$('#taxonomies').tabs('#taxonomies div', {tabs: 'h3', effect: 'horizontal'});
	}
	if($('.info')) {
		resizeFloatingElementWidth($('.info'), $('#content'), 100 + 18);
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
		resizeFloatingElementWidth($('.info'), $('#content'), 100 + 18);
	}
});



function resizeFloatingElementWidth(floatingElt, container, fixedSizeElt) {
	floatingElt.width( container.width() - fixedSizeElt );
}

//function resizeFloatingElementHeight(floatingElt, container, fixedSizeElt) {
//	floatingElt.height( container.height() - fixedSizeElt );
//}
