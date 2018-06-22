(function(){
  console.log('hello');

  const elem = document.querySelector('.o-grid');
  let msnry;

  // imagesLoaded( elem, function() {
  //   msnry = new Masonry(elem, {
  //     itemSelector: '.o-tile-grided',
  //     columnWidth: '.o-tile-grided',
  //     fitWidth: true,
  //     gutter: 20
  //   });
  // });
  //
  var grid = document.querySelector('.o-grid');
  var colc = new Colcade( grid, {
    columns: '.grid-col',
    items: '.o-tile-grided'
  });
})();
