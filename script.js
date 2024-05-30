var root = document.querySelector(':root');
var main = document.getElementsByTagName('main')[0];

document.onmousemove = (e) => {
    if (main.matches(':hover')) {
        main.style.transform = 'translate(-50%, -50%) rotateY(0deg) rotateX(0deg)';
    } else {
        main.style.webkitTransform = main.style.transform = 'translate(-50%, -50%) ' +
            'rotateY(' + ( (e.pageX / window.innerWidth - .5 ) * 80) + 'deg) ' +
            'rotateX(' + ( (e.pageY / window.innerHeight- .5 ) * -80) + 'deg)';    
    }
};
