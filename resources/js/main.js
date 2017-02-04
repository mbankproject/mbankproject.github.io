'use strict';

function $(e, b = document) {
  return b.querySelectorAll(e);
}

HTMLDocument.prototype.findPos = function(obj) {
    var curtop = 0;
    if(obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while(obj = obj.offsetParent);
    return [curtop];
    }
}

HTMLDocument.prototype.toggleClass = function(className, elements) {
  for(var element of elements) {
    element.classList.toggle(className);
  }
}

HTMLDocument.prototype.getScrollOffset = function() {
  return window.pageYOffset || document.documentElement.scrollTop || 0;
}

HTMLDocument.prototype.getViewportHeight = function() {
  return document.documentElement.clientHeight || window.innerHeight || 0;
}

document.addEventListener('DOMContentLoaded', function() {
  var nav = $('header#header nav')[0],
      burger = $('.burger')[0],
      dropDown = $('.dropDown')[0],
      blackscreen = $('.blackscreen')[0],
      dropDownLinks = $('a', dropDown),
      products = Array.from($('.content .product > div, .content+.about > .close')).map(function(item) {
        return {active: false,
                type: item.className.indexOf('close')>=0?'close':'product',
                element: item,
                content: $('#'+item.getAttribute('name'))[0] || false,
                changeState: function(type) {
                  var e = this.element.classList, c = this.content.classList;
                  if(type=='add') {
                    e.add('active');
                    c?c.add('active'):0;
                  } else {
                    e.remove('active');
                    c?c.remove('active'):0;
                  }
                },
               };
      });
  /* Sticky navbar scroll */
  document.addEventListener('scroll', function() {
    if(document.getScrollOffset()>=(document.getViewportHeight()-40)) {
      nav.classList.add('dark');
    } else {
      nav.classList.remove('dark');
    }
  });
  /* Burger menu */
  burger.addEventListener('click', function() {document.toggleClass('active', [burger, dropDown, blackscreen, nav])});

  /* blackscreen behind burger menu */
  blackscreen.addEventListener('click', function() {burger.click()});

  /* dropdown menu links */
  Array.from(dropDownLinks).map(function(item) {
    item.addEventListener('click', function() {
      item.classList.add('active');
      setTimeout(function() {
        item.classList.remove('active');
        window.location.hash = item.getAttribute('href');
        document.toggleClass('active', [blackscreen, dropDown, nav, burger]);
      }, 250);
    });
  });

  /* products dropdown description */
  products.map(function(item) {
    item.element.addEventListener('click', function() {
      for(var other of products) {
        other.changeState('remove');
        other.active = false;
      }
      item.active = true;
      item.changeState('add');
      if(item.content.getBoundingClientRect().top>document.getViewportHeight()) {
        window.scroll(0, document.findPos(item.content)-50);
      }
    });
  });
  Array.from($('.calc input[type=range]')).map(function(input) {
    input.addEventListener('input', function(event) {
      event.target.nextSibling.nextSibling.innerHTML = event.target.value;
    });
  })
});
