const isotopeOptions = {
  itemSelector: '.grid-item',
	masonry : {
		columnWidth: 220,
		gutter: 10,
    }
};

$('.grid').isotope(isotopeOptions);

$('.grid-item').on('click', function(){
  $(this).toggleClass("grid-item__open");
  $('.grid').isotope(isotopeOptions);
});