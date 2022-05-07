window.addEventListener("load",function() {
  var color = document.getElementById('content');
  color.addEventListener('click', ()=> {
      console.log('box clicked');
      color.classList.toggle("light_mode");
  });
})