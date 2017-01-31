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
});
