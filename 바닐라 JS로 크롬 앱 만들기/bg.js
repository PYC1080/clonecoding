const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad(){
    console.log("finished Img loading!")
}

function paintImg(imgNumber){
    const img = new Image();
    img.src = `img/backgroundImg${imgNumber+1}.jpg`;
    img.classList.add('bgImage')
    body.prepend(img)
    img.addEventListener("loadend",handleImgLoad)
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number
}

function init(){
    const randomNumber = getRandom();
    paintImg(randomNumber)
}

init();