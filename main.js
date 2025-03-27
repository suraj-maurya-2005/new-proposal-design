const b1 = document.getElementById("box1");
const b2 = document.getElementById("box2");
const b3 = document.getElementById("box3");
const b4 = document.getElementById("box4");
const b5 = document.getElementById("box5");
const btn = document.getElementById("btn");
const heart = document.getElementById("heart");
const heart1 = document.getElementById("heart1");
const heart2 = document.getElementById("heart2");
const heart3 = document.getElementById("heart3");
const heart4 = document.getElementById("heart4");
const heart5 = document.getElementById("heart4");
const heart6 = document.getElementById("heart6");


function animation() {
    b1.style.top = "10px";
    b1.style.right = "1px";
    b1.style.transition = '1s ease-out';

    setTimeout(() => {
        b2.style.top = "5cm";
        b2.style.left = "1px";
        b2.style.transition = '1s ease-out';
    }, 2000);

    setTimeout(() => {
        b3.style.top = "10cm";
        b3.style.right = "1px";
        b3.style.transition = '1s ease-out';
    }, 4000);

    setTimeout(() => {
        b4.style.top = "14cm";
        b4.style.left = "1px";
        b4.style.transition = '1s ease-out';
    }, 6000);

    setTimeout(() => {
        b5.style.top = "20%";
        b5.style.right = "10%";
        b5.style.transition = '1s ease-out';

        heart.style.top = "1%";
        heart.style.transition = '1s ease-out';

        heart1.style.top = "5cm";
        heart1.style.left = "2%";
        heart1.style.transition = '2s ease-out';

        heart2.style.top = "15cm";
        heart2.style.left = "10%";
        heart2.style.transition = '3s ease-out';

        heart3.style.top = "15cm";
        heart3.style.right = "2%";
        heart3.style.transition = '4s ease-out';

        heart4.style.top = "5cm";
        heart4.style.right = "2%";
        heart4.style.transition = '4.2s ease-out';

        heart5.style.top = "10cm";
        heart5.style.left = "4%";
        heart5.style.transition = '3.5s ease-out';

        heart6.style.top = "10cm";
        heart6.style.right = "3%";
        heart6.style.transition = '2.5s ease-out';
        
        
    }, 30000);



    setTimeout(() => {
        b1.style.top = '-84%';
    }, 16000);

    setTimeout(() => {
        b2.style.top = '-84%';
    }, 20000);

    setTimeout(() => {
        b3.style.top = '-84%';
    }, 24000);

    setTimeout(() => {
        b4.style.top = '-84%';
    }, 28000);

    setTimeout(() => {
        b5.style.top = '-84%';
    }, 45000);

    setTimeout(() => {
        heart.style.top = '-84%';
        heart.style.transition = '2s ease-in-out';

        heart1.style.top = '-84%';
        heart1.style.transition = '2s ease-in-out';

        heart2.style.top = '-84%';
        heart2.style.transition = '2s ease-in-out';

        heart3.style.top = '-84%';
        heart3.style.transition = '2s ease-in-out';

        heart4.style.top = '-84%';
        heart4.style.transition = '2s ease-in-out';

        heart5.style.top = '-84%';
        heart5.style.transition = '2s ease-in-out';

        heart6.style.top = '-84%';
        heart6.style.transition = '2s ease-in-out';
    }, 48000);
}

btn.addEventListener('click', animation);
btn.addEventListener('click', () =>{
    let audio = document.getElementById('audio');
    audio.play();
});