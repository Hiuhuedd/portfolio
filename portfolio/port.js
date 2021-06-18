$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $(".menubtn").click(function() {
        $(".navbar .menu").toggleClass("active");
        $(".menubtn i").toggleClass("active");
    });
    // typed animation code
    const typed = new Typed(".typing", {
        strings: ["web developer", "web designer", "freelancer"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true,
    });
    const typed2 = new Typed(".typing2", {
        strings: ["web developer"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true,
    });
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });
});
const fotos = document.querySelector("#pic");
const nextimg = document.querySelector(".next");
const images = ["karis", 'edu', 'slogan'];
console.log(images.length);
let imageIndex = 1;
loadimage(images[imageIndex]);

function loadimage(image) {
    fotos.src = `/images1/${image}.jpeg`;
}

function nextimage() {
    imageIndex++;
    if (imageIndex > images.length - 1) {
        imageIndex = 0;
    }
    loadimage(images[imageIndex]);
}
nextimg.addEventListener("click", nextimage);
//owl carousel script