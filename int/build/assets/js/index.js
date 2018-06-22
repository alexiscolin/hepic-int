'use strict';

(function () {
  console.log('hello');

  var elem = document.querySelector('.o-grid');
  var msnry = void 0;

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
  var colc = new Colcade(grid, {
    columns: '.grid-col',
    items: '.o-tile-grided'
  });
})();
//# sourceMappingURL=index.js.map
