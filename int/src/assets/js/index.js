(function(){
  console.log('hello');

  const elem = document.querySelector('.o-grid');
  let msnry;

  imagesLoaded( elem, function() {
    msnry = new Masonry(elem, {
      itemSelector: '.o-tile-grided',
      columnWidth: '.o-tile-grided',
      fitWidth: true,
      gutter: 20
    });
  });
})();
