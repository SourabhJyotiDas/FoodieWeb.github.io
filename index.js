let hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('hidden');
    document.querySelector('.cross').classList.toggle('hidden');
    document.querySelector('.ham').classList.toggle('hidden');
})
document.querySelector('.cross').addEventListener('click', () => {
    document.querySelector('.ham').classList.toggle('hidden');
    document.querySelector('.cross').classList.toggle('hidden');
    document.querySelector('.nav').classList.toggle('hidden');
})


let happyCustomer = document.getElementById('happy-customer');
let customerReview = document.getElementById('review');


let images =['imgs/sl-1.jpg','imgs/sl-2.jpg','imgs/sl-3.jpg','imgs/sl-4.jpg']
let index = 0;
function changeImg() {
    happyCustomer.src = images[index];
    if (index < images.length - 1) {
        index++        
    }
    else {
        index = 0;
    }
    setTimeout(changeImg, 3000)
}
changeImg()

let imgs = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/8.jpg', 'imgs/9.jpg', 'imgs/10.jpg']
let main = document.getElementById('slide')
function slides1() {
    let random = Math.floor(Math.random()*7)
    main.src = imgs[random]
}
function slides2() {
    let random = Math.floor(Math.random()*7)
    main.src = imgs[random]
}

function gallery(smallImg){
    let aboutMain = document.getElementById('aboutMain');
    aboutMain.src = smallImg.src
}

function load(){    
    setTimeout(() => {
        document.querySelector('.preloader').classList.toggle('hidden')
    }, 3000);
}
load()









