var lastId,topMenu,topMenuHeight, menuItems,scrollItems;

function getAgenda(event, id, value) {
	$('.speakers').removeClass("active");
	$('.event').removeClass("active");
	$(event.target).addClass("active");
	$("[id='"+id+'-'+value.trim()+"']").addClass("active");
}

function getEventsFor(id, value) {
	$('.year').removeClass("active");
	$('.event').removeClass("show");
	$('.event').removeClass("active");
	$('#'+id).addClass("active");
	$("*[id*="+value+"]").addClass("show");
}

function setClickListiners() {
	topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+30,    
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

	menuItems.click(function(e) {
	 	var href = $(this).attr("href"),
	 	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		$('html, body').stop().animate({ 
	     	scrollTop: offsetTop
	  	}, 300);
		e.preventDefault();
	});
}

function highlightMenu() {
	var fromTop = $(this).scrollTop()+topMenuHeight;

	if(!scrollItems) return;
      
	var cur = scrollItems.map(function(){
	 if ($(this).offset().top < fromTop)
	   return this;
	});   
	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";

	if (lastId !== id) {
	   lastId = id;
	   menuItems.parent()
	   			.removeClass("active")
	   			.end()
	   			.filter("[href='#"+id+"']")
	   			.parent()
	   			.addClass("active");
	}
}

$(document).ready(function() {
	$($(".months")[0].childNodes[1]).addClass("active");
	setClickListiners();
	highlightMenu();
});

$(document).scroll(function () {
	var y = $(this).scrollTop();
	if(y > 600) {
		$("#header").addClass("shadow");		
	} else {
		$("#header").removeClass("shadow");
	}
	highlightMenu();
});
