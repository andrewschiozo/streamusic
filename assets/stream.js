$(function(){
	loadMusicas();
	 //Search
	$("#pesquisar").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$(".list-group li").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	// On menu item click
	$('#menu').on('click', '.nav-item', function(data){
		$('#btnMenu').trigger('click');
	});
	//On list item click
	$('#content').on('click', '.list-group > li', function(data){
		$('source').attr('src', $(this).attr('url'));
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('audio')[0].load();
		$('audio')[0].play();
	});

	$('audio').on('ended', function() {
		next();
	});
});

function next()
{
	var next = $('.active').next();
	$('.active').removeClass('active');
	next.trigger('click');
}

function loadMusicas()
{
	$.get('musicList.php', function(response){
		response = JSON.parse(response);
	    $.each(response.data, function(index, value){
	    	var item = $('<li></li>');
	    	item.addClass('list-group-item');
	    	item.addClass('list-group-item-action');
	    	item.attr('url', value.url);
	    	item.text(value.artist + ' - ' + value.title);
	    	$('#musicas').append(item);
   		});
	});
}

