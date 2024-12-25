document.addEventListener('click', function(event){
  if(event.target.closest('.burger__menu')){
    event.target.closest('.burger__menu').classList.toggle('burger-active');
  }
});