// JavaScript Document
for(let i = 0; i < 16; i++) {
	$('#boxes').append('<div class="box"></div>');
}

$('#boxes').on('click', '.box', function() {
  $(this).toggleClass('lightSquare');
});
