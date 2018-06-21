'use strict';

console.log('hello');

var elem = document.querySelector('.o-grid');
var msnry = new Masonry(elem, {
  // options
  itemSelector: '.o-tile-grided',
  columnWidth: 200
});

// element argument can be a selector string
// //   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// })
//# sourceMappingURL=index.js.map
