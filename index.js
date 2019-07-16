const isotopeOptions = {
  itemSelector: '.grid-tile',  
	masonry : {
		columnWidth: 220,
    gutter: 10,    
  },
  stagger: 30
};

$('.grid').isotope(isotopeOptions);

$('body').on('click', '.grid-tile:not(.grid-tile__open)', function(){
  $(this).toggleClass("grid-tile__open");
  $('.grid').isotope(isotopeOptions);  
});

$('body').on('click', '.grid-tile__collapse', function(){
  $(this).parent().toggleClass("grid-tile__open");
  $('.grid').isotope(isotopeOptions);
});

$('.grid-filters li a').click(function(e){
  e.preventDefault();
  let $thisParent = $(this).parent();
  $('.selected').removeClass("selected");
  $thisParent.addClass("selected");
  window.setTimeout(() => { 
    $('.grid').isotope({ filter: $thisParent.data('filter') });
  }, 200);
});

