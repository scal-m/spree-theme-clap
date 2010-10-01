addEvent(window, 'load', init_accordion, false);


function init_accordion() {
	var accordion_current_li = document.getElementById('current');
	if(!accordion_current_li && document.getElementById('taxonomies')) {
		accordion_current_li = document.getElementById('taxonomies').firstChild.nextSibling;
		accordion_current_li.id = 'current';
	}
	
	accordion_current_li.style.width = '140px';
	accordion_current_li.style.overflow = 'hidden';
	
	var accordion_current_h3 = accordion_current_li.getElementsByTagName('h3')[0];
	accordion_current_h3.style.color = '#fff';
	accordion_current_h3.style.background = '#000';
	
	var accordion_current_div = accordion_current_li.getElementsByTagName('div')[0];
	accordion_current_div.style.display = 'block';
	
	var items = document.getElementsByClassName('navigation-list');
	for(var i = 0; i < items.length; i++) {
		addEvent(items[i], 'mouseover', hover_behaviour, false);
		addEvent(items[i], 'mouseout', out_behaviour, false);
	}
	
//	var component = document.getElementById('taxonomies');
//	addEvent(component, 'mouseout', out_behaviour, false);
}

function hover_behaviour(evnt) {
	var accordion_current_li = document.getElementById('current');
	
	var trgt = evnt.target || evnt.srcElement;
	
	var accordion_current_div = accordion_current_li.getElementsByTagName('div')[0];
	var accordion_current_h3 = accordion_current_li.getElementsByTagName('h3')[0];
	
	if(!is_child_of(trgt, accordion_current_li) && accordion_current_div.style.display != 'none') {
		accordion_current_li.style.width = '40px';
		accordion_current_li.style.display = 'block';
		
		accordion_current_div.style.display = 'none';
		
		accordion_current_h3.style.color = '#000';
		accordion_current_h3.style.background = '#cccccc';
	} else if (accordion_current_div.style.dislpay != 'block') {
		accordion_current_li.style.width = '140px';
			
		accordion_current_div.style.display = 'block';
		
		accordion_current_h3.style.color = '#fff';
		accordion_current_h3.style.background = '#000';
	}

	return true;
}

function out_behaviour(evnt) {
	var accordion_current_li = document.getElementById('current');
	
	var trgt = evnt.target || evnt.srcElement;
	
	var accordion_current_div = accordion_current_li.getElementsByTagName('div')[0];
	var accordion_current_h3 = accordion_current_li.getElementsByTagName('h3')[0];
	
	if(!is_child_of(trgt, accordion_current_li)) {
		accordion_current_li.style.width = '140px';
			
		accordion_current_div.style.display = 'block';
		
		accordion_current_h3.style.color = '#fff';
		accordion_current_h3.style.background = '#000';
	}
	
	return true;
}

function is_child_of(ChildObject, ContainerObject) {
	var retval = false;
	var curobj;
	if(typeof(ContainerObject) == "string") {
		containerObject = document.getElementById(ContainerObject);
	}
	if(typeof(ChildObject) == "string") {
		ChildObject = document.getElementById(ChildObject);
	}
	
	curobj = ChildObject.parentNode;
	while(curobj != undefined) {
		if(curobj == document.body) {
			break;
		}
		if(curobj.id == ContainerObject.id)
		{
			retval = true;
			break;
		}
		curobj = curobj.parentNode; 
	}
	return retval;
}
