document.addEventListener('DOMContentLoaded', function(){
  let container = document.getElementById('container');
  let pages = document.getElementsByClassName('page');

  container.addEventListener('click',function(e){
    let zIndex = 2;
    Array.apply(null,pages).forEach(function(page){
      page.style.zIndex = zIndex;
      zIndex--;
    })
    e.target.style.zIndex = 3;
  })
});
