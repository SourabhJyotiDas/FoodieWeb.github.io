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


let images =['imgs/1.jpg','imgs/2.jpg','imgs/3.jpg','imgs/4.jpg','imgs/8.jpg','imgs/9.jpg','imgs/10.jpg']
let main = document.getElementById('slide')

function slides1() {
    let random = Math.floor(Math.random()*7)
    main.src = images[random]
}
function slides2() {
    let random = Math.floor(Math.random()*7)
    main.src = images[random]
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


let happyCustomer = document.getElementById('happy-customer');
let customerReview = document.getElementById('review');


setInterval(() => {
    let imgs =['sl-1.jpg','sl-2.jpg','sl-3.jpg','sl-4.jpg'];
    let backImg =imgs[Math.floor(Math.random()*imgs.length)]
    happyCustomer.src = "imgs/"+backImg
    let reviewTxt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odio quidem doloribus voluptatibus. Officia mollitia quis nobis. Fugit, culpa doloremque soluta laboriosam rerum officia ut numquam voluptate perferendis necessitatibus ea."
    customerReview.innerHTML = reviewTxt
}, 3000);
