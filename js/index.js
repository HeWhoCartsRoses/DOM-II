// Your code goes here
function hover(obj) {
    document.querySelectorAll(obj).forEach(el => {
        el.addEventListener("mouseover", () => {
            el.style.color = "pink";
            el.style.transform = "scale(1.2)";
            el.style.transition = "transform 0.3s"
        })
    })
}
function keydown(obj) {
    document.querySelectorAll(obj).forEach(el => {
        el.addEventListener("keypress", () => {
            el.style.transform = 'scale(3)';
            el.style.transition = 'transform 120s'
        })
    })
}
function move(obj) {
    document.querySelectorAll(obj).forEach(el => {
        el.addEventListener("mouseover", () => {
            el.style.transform = 'font-size:150%'
        })
    })
}
function select(obj) {
    document.querySelectorAll(obj).forEach(el => {
        el.addEventListener("select", () => {
        })
    })
}
function focus(obj) {
    document.querySelectorAll(obj).forEach(el => {
        el.addEventListener("blur", () => {
            el.style.transform = 'opacity:0.3'
            el.style.transition = 'transform .5s'
        })
        el.addEventListener('focus', () => {
            el.stlye.transform = 'opacity:1'
            el.stlye.transition = 'transform .3s'
        })
    })
}
function click(obj) {
    document.querySelectorAll(obj).forEach(el => {
        el.addEventListener("click", () => {
            el.style.color = "red";
            el.style.background = 'black';
        })
    })
}
function scroll(obj) {
    document.querySelectorAll(obj).forEach(el => {
        el.addEventListener("scroll", () => {
            el.style.color = 'orange'
        })
    })
}
function select(obj) {
    document.querySelectorAll(obj).forEach(el => {
        el.addEventListener("click", () => {
            el.style.background = "pink"

        })
    })
}
function dclick(obj) {
    document.querySelectorAll(obj).forEach(el => {
        el.addEventListener("dblclick", () => {
            el.style.transform = 'scale(1.5)'
        })
    })
}
keydown('*');
hover('.text-content');
dclick('.img-content');
click('*');
focus('*');
drag('.destination p');
scroll('.nav-link')
move('footer')