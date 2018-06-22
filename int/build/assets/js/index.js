'use strict';

(function () {
  console.log('hello');

  var elem = document.querySelector('.o-grid');
  var msnry = void 0;

  imagesLoaded(elem, function () {
    msnry = new Masonry(elem, {
      itemSelector: '.o-tile-grided',
      columnWidth: '.o-tile-grided',
      fitWidth: true,
      gutter: 20
    });
  });
})();
//# sourceMappingURL=index.js.map
