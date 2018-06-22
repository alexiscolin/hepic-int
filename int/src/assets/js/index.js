(function(){
  console.log('hello');

  const elem = document.querySelector('.o-grid');

  if(elem){
    let msnry;
    let colc = new Colcade( elem, {
      columns: '.grid-col',
      items: '.o-tile-grided'
    });
  }

})();
