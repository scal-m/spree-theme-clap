jQuery(document).ready(function() {
	if(document.getElementById('taxonomies')) {
		var child = document.getElementById('taxonomies').childNodes[1];
		if(child.className == 'current') {
			$('#taxonomies').tabs('#taxonomies div', {tabs: 'h3', effect: 'horizontal', initialIndex: 0});
		} else {
			$('#taxonomies').tabs('#taxonomies div', {tabs: 'h3', effect: 'horizontal', initialIndex: 1});
		}
	}
	if(document.getElementById('content')) {
		resizeFloatingElementWidth($('#content'), $(window), 382); 
		if($('.info')) {		
			resizeFloatingElementWidth($('.info'), $('#content'), 70);
		}
	}
	
//	if($('#content')) {
//		resizeFloatingElementHeight($('#content'), $(window), $('#header').height() + $('#footer').height());
//	}

	var audios = document.getElementsByTagName('audio');
	for(var i=0; i < audios.length; i++) {
//		audios[i].removeAttribute('controls');
		audios[i].addEventListener('play', function () {
			var butt_id = 'play_' + this.id.split('_')[1];
			document.getElementById(butt_id).title = 'pause';
			document.getElementById(butt_id).innerHTML = "<img alt='play' src='/images/mini_player/mini_play_on.png' />";
		}, false);
		audios[i].addEventListener('pause', function() {
			var butt_id = 'play_' + this.id.split('_')[1];
			document.getElementById(butt_id).title = 'play';
			document.getElementById(butt_id).innerHTML = "<img alt='play' src='/images/mini_player/mini_play_off.png' />";
		}, false);
		audios[i].addEventListener('ended', function() {
			this.currentTime = 0;
			this.pause();
		}, false);
	}

	$.preloadImages('/images/accordeon_hover.gif', '/images/header_btn_off.png', '/images/header_loupe_on.png', '/images/mini_player/mini_play_on.png', '/images/touche_over.jpg');
	
});

// with timer for IE support
//var resizeTimer = null;
//$(window).resize(function() {
//	if(resizeTimer) clearTimeout(resizeTimer); 
//	resizeTimer = setTimeout("if($('.info')) resizeFloatingElementWidth($('.info'), $('#content'), 100 + 18);", 100);
//});

// without timer for more fluidity
$(window).resize(function() {
	if(document.getElementById('content')) {
		resizeFloatingElementWidth($('#content'), $(window), 382); 
		if($('.info')) {
			resizeFloatingElementWidth($('.info'), $('#content'), 70);
		}
	}
});


function resizeFloatingElementWidth(floatingElt, container, fixedSizeElt) {
	floatingElt.width( container.width() - fixedSizeElt );
}

//function resizeFloatingElementHeight(floatingElt, container, fixedSizeElt) {
//	floatingElt.height( container.height() - fixedSizeElt );
//}

function handleAudioButton(product_id) {
	var audio = document.getElementById('audio_' + product_id);
//	audio[audio.paused ? 'play' : 'pause']();
	if(audio.paused) {
		var audios  = document.getElementsByTagName('audio');
		for(var i=0; i < audios.length; i++) {
			if(!audios[i].paused) {
				audios[i].currentTime = 0;
				audios[i].pause();
			}	
		}
		audio.play();
	} else {
		audio.pause();
	}
}

jQuery.preloadImages = function() {
	for(var i = 0; i < arguments.length; i++) {
		jQuery("<img>").attr("src", arguments[i]);
	}
}
