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

  $('.blackscreen')[0].addEventListener('click', function(event) {
    this.classList.toggle('active');
    $('.dropDown')[0].classList.toggle('active');
    $('header#header nav')[0].classList.toggle('active');
    $('.burger')[0].classList.toggle('active');
  });

  Array.from($('.dropDown ul a')).map(function(item) {
    item.addEventListener('click', function(event) {
      window.location.hash = item.getAttribute('href');
      $('.blackscreen')[0].classList.toggle('active');
      $('.dropDown')[0].classList.toggle('active');
      $('header#header nav')[0].classList.toggle('active');
      $('.burger')[0].classList.toggle('active');
    });
  })

  Array.from($('.content .product > div, .content+.about > .close')).map(function(item, index, array) {
    item.addEventListener('click', function(event) {
      array.map(function(item2) {
        item2.classList.remove('active');
      })
      item.classList.add('active');
      Array.from($('.content+.about > section')).map(function(section) {
        if(section.id === item.getAttribute('name')) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    });
  });

  document.addEventListener('scroll', function(event) {
    if(event.pageY+25 >= Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) {
      $('header#header nav')[0].classList.add('dark');
    } else {
      $('header#header nav')[0].classList.remove('dark');
    }
  });
});
