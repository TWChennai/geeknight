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

$(document).ready(function() {
$($(".months")[0].childNodes[1]).addClass("active");
});