var masonryOptions = {
  itemSelector: '.grid-tile',
	columnWidth: '.grid-sizer',
  gutter: 10,
  stagger: 0,
  fitWidth: true,
};

$('.grid').masonry(masonryOptions);

$('body').on('click', '.grid-tile:not(.grid-tile__open)', function(){
  $(this).toggleClass("grid-tile__open");
  $('.grid').masonry(masonryOptions);  
});

$('body').on('click', '.tile-collapse', function(){
  $(this).parent().toggleClass("grid-tile__open");
  $('.grid').masonry(masonryOptions);
});

$('.grid-filters li a').click(function(e){
  e.preventDefault();
  let $thisParent = $(this).parent();
  
  $('.selected').removeClass("selected");
  $thisParent.addClass("selected");
  
  $('.grid-tile').hide();
  $($thisParent.data('filter')).show();
  
  $('.grid').masonry(masonryOptions);
});

