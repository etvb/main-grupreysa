let card = document.getElementById('1');
let cardtoggle = document.getElementById('1.1');

let card2 = document.getElementById('2');
let cardtoggle2 = document.getElementById('2.1');

let card3 = document.getElementById('3');
let cardtoggle3 = document.getElementById('3.1');

cardtoggle.onclick = function(){
    card.classList.toggle('active-110822');
}

cardtoggle2.onclick = function(){
    card2.classList.toggle('active-110822');
}

cardtoggle3.onclick = function(){
    card3.classList.toggle('active-110822');
}


function show() {
    document.getElementById('slidingMenu').classList.add('open');
}

function hide() {
    console.log('h');
    document.getElementById('slidingMenu').classList.remove('open');
}