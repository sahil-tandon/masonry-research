const isotopeOptions = {
  itemSelector: '.grid-item',  
	masonry : {
		columnWidth: 220,
    gutter: 10,    
  },
  stagger: 30
};

$('.grid').isotope(isotopeOptions);

$('.grid-item').on('click', function(){
  $(this).toggleClass("grid-item__open");
  $('.grid').isotope(isotopeOptions);
});

$('.grid-filters li a').click(function(e){
  e.preventDefault();
  $('.grid').isotope({ filter: $(this).parent('li').data('target') });
})