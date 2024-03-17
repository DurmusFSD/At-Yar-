const bitis = document.getElementById("bitis")
const dugme = document.getElementById("btn")
const sonuc = document.getElementById("sonuc")
const at1 = document.getElementById("at1")
const at2 = document.getElementById("at2")
const at3 = document.getElementById("at3")
const at4 = document.getElementById("at4")
const at5 = document.getElementById("at5")
const at6 = document.getElementById("at6")
let x1 = 0, x2=0, x3=0, x4=0, x5=0, x6=0;
let timerId=null;

function rast(){
    return Math.floor(Math.random()*10)
}
function git(){
    x1+= rast();
    x2+= rast();
    x3+= rast();
    x4+= rast();
    x5+= rast();
    x6+= rast();
    at1.style.left = x1 + "px"
    at2.style.left = x2 + "px"
    at3.style.left = x3 + "px"
    at4.style.left = x4 + "px"
    at5.style.left = x5 + "px"
    at6.style.left = x6 + "px"

    let onde = ondeki();
    sonuc.textContent = onde.alt + " YARIŞI ÖNDE GÖTÜRÜYOR";

    if(onde.offsetLeft + onde.width> bitis.offsetLeft){
        
    sonuc.textContent = onde.alt + " YARIŞI KAZANDI";
    bitir();
    }
}
function bitir(){
    clearInterval(timerId);
    timerId = null;
    dugme.textContent = "YENİ YARIŞ";
}
function ondeki(){
    let ondekiAt = at1;

    if(at2.offsetLeft > ondekiAt.offsetLeft)
    ondekiAt = at2
    if(at3.offsetLeft > ondekiAt.offsetLeft)
    ondekiAt = at3
    if(at4.offsetLeft > ondekiAt.offsetLeft)
    ondekiAt = at4
    if(at5.offsetLeft > ondekiAt.offsetLeft)
    ondekiAt = at5
    if(at6.offsetLeft > ondekiAt.offsetLeft)
    ondekiAt = at6

    return ondekiAt;
}

dugme.onclick = function(){
    if(dugme.textContent == "YENİ YARIŞ"){
        x1 = x2 = x3 = x4 = x5 = x6 = 0;
        at1.style.left = at2.style.left = at3.style.left = at4.style.left = at5.style.left = at6.style.left = "0px";
        dugme.textContent = " BAŞLAT"
        sonuc.textContent = "ATLAR YARIŞA HAZIR"
    }
    else if(timerId == null){
        timerId = setInterval(git,100);
        dugme.textContent = "DURDUR"
    }
    else if (dugme.textContent == "DURDUR"){
        clearInterval(timerId);
        timerId = null;
        dugme.textContent = "DEVAM ET"
    }
}