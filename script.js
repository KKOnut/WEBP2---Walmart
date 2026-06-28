// Desktop swiper 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


var swiper2 = new Swiper(".mySwiperTwo", {
    slidesPerView: 3,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   
    mousewheel: true,
    keyboard: true,
});

var swiper3 = new Swiper(".mySwiperThree", {
    slidesPerView: 4,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   
    mousewheel: true,
    keyboard: true,
});


// Mobile Swippers

var swiperMobile= new Swiper(".mySwiperMobile", {
    slidesPerView: 3,
    spaceBetween: 20,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    mousewheel: true,
    keyboard: true,
});

var swiperMobileOneSlide= new Swiper(".mySwiperMobileOneSlide", {
    slidesPerView: 1,
    spaceBetween: 20,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    mousewheel: true,
    keyboard: true,
});


var swiperMobileTwoSlide= new Swiper(".mySwiperMobileTwoSlide", {
    slidesPerView: 2,
    spaceBetween: 20,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
});

// Video hover play


let videos= document.querySelectorAll('.video-full-view');

document.addEventListener("DOMContentLoaded", function() {
    
    let videos = document.querySelectorAll('.video-full-view');

    videos.forEach(video => {

        let playButton = video.parentElement.querySelector('#pause-button');
        let pauseButton = video.parentElement.querySelector('#pause-button');




        video.addEventListener('mouseover', () => {
            video.play();
            playButton.style.opacity = 0;
            pauseButton.style.opacity = 1;
        });


        video.addEventListener('mouseleave', () => {
            video.pause();
            playButton.style.opacity = 1;
            pauseButton.style.opacity = 0;
        });


        playButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playButton.style.opacity = 0;
                pauseButton.style.opacity = 1;
            } else {
                video.pause();
                playButton.style.opacity = 1;
                pauseButton.style.opacity = 0;
            }
        });

        pauseButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playButton.style.opacity = 0;
                pauseButton.style.opacity = 1;
            } else {
                video.pause();
                playButton.style.opacity = 1;
                pauseButton.style.opacity = 0;
            }
        });
    });
});
