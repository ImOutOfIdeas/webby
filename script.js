var t = document.getElementsByTagName('main')[0];

document.documentElement.onmousemove = (e) => {
  t.style.webkitTransform = t.style.transform = 'rotateY(' + (((e.pageX / screen.width) - .25 ) * 90) + 'deg) rotateX(' + (((e.pageY / screen.width) - .25 ) * -90) + 'deg)';    
};

