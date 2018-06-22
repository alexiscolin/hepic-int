'use strict';

(function () {
  console.log('hello');

  var elem = document.querySelector('.o-grid');

  if (elem) {
    var msnry = void 0;
    var colc = new Colcade(elem, {
      columns: '.grid-col',
      items: '.o-tile-grided'
    });
  }
})();
//# sourceMappingURL=index.js.map
