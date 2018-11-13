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
		var audio = document.getElementsByTagName('audio')[0];
		audio.load();
	});
});

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

