const mover = document.getElementById('mover');
const button = document.getElementById('button');

mover.addEventListener("mouseover",mouseOver);
mover.addEventListener("mouseout", mouseOut);

function mouseOver() {
    mover.style.scale ='1.1'
}

function mouseOut() {
    mover.style.scale='1'
}

button.addEventListener('mousedown',mouseDown);
button.addEventListener('mouseup',mouseUp);
button.addEventListener('mouseleave',mouseLeave)

function mouseDown() {
    button.style.scale ='0.8'
}

function mouseUp() {
    button.style.scale ='1'
    location.replace("https://lofitemple.vercel.app")
}
function mouseLeave() {
    button.style.scale ='1'
}