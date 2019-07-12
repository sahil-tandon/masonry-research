$('.grid').isotope({
  itemSelector: '.grid-item',
	masonry : {
		columnWidth: 220,
		gutter: 10,
    }
});
$('.grid-item').on('click', function(){
  $(this).toggleClass("grid-item__open");
});