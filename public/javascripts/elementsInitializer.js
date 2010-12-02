jQuery(document).ready(function() {
	//alert("dom is OK");
	if(document.getElementById('taxonomies')) {
		var child = document.getElementById('taxonomies').childNodes[1];
		//alert("className : " + child.nodeName);
		if(child.className == 'current') {
			$('#taxonomies').tabs('#taxonomies div', {tabs: 'h3', effect: 'horizontal', initialIndex: 0});
		} else {
			$('#taxonomies').tabs('#taxonomies div', {tabs: 'h3', effect: 'horizontal', initialIndex: 1});
		}
//		var api = $('#taxonomies').tabs('#taxonomies div');
//		api.next();
//		done.call();
	}
	if($('.info')) {
		resizeFloatingElementWidth($('.info'), $('#content'), 120);
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
		resizeFloatingElementWidth($('.info'), $('#content'), 120);
	}
});



function resizeFloatingElementWidth(floatingElt, container, fixedSizeElt) {
	floatingElt.width( container.width() - fixedSizeElt );
}

//function resizeFloatingElementHeight(floatingElt, container, fixedSizeElt) {
//	floatingElt.height( container.height() - fixedSizeElt );
//}
