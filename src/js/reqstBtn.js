const btn = document.querySelector('.btn-leave-rqst');

function enterMouse(e) { 
  var pos = btn.getBoundingClientRect();
  var relX = e.pageX - pos.left;
  var relY = e.pageY - pos.top;
  

  btn.children[1].style.left = `${relX}px`;  
  btn.children[1].style.top = `${relY}px`;
}

if (btn){
  btn.addEventListener('mouseenter', enterMouse);
}