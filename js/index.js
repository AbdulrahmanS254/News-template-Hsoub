const mql = window.matchMedia("(max-width: 992px)");

const changeSlideView = (slide) => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: slide,
        spaceBetween: 30,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};

const handleMediaChange = (e) => {
    if (mql.matches) {
        changeSlideView(1);
    } else {
        changeSlideView(3);
    }
};

handleMediaChange();

mql.onchange = (e) => {
    handleMediaChange(e);
}


let year = document.getElementById("year");

let date = new Date().getFullYear();

year.innerHTML = date;
