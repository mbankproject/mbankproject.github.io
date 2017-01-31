function $(e) {
  return document.querySelectorAll(e);
}

document.addEventListener('DOMContentLoaded', function() {
  $('.burger')[0].addEventListener('click', function(event) {
    this.classList.toggle('active');
    $('.dropDown')[0].classList.toggle('active');
    $('header#header nav')[0].classList.toggle('active');
    $('.blackscreen')[0].classList.toggle('active');
  });

  document.addEventListener('scroll', function(event) {
    if(event.pageY+25 >= Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) {
      $('header#header nav')[0].classList.add('dark');
    } else {
      $('header#header nav')[0].classList.remove('dark');
    }
  });
});
