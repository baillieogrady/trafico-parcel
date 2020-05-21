import './scss/index.scss';

import $ from "jquery";
import 'slick-carousel'
import 'slick-carousel/slick/slick.scss';

// globals
const global = {
    body: document.querySelector("body")
}

// header
const header = (function () {
    const content = {
        burger: document.querySelector(".burger"),
        headerNav: document.querySelector(".header__nav")
    }

    const burgerToggle = function () {
        // toggle to mobile menu when burger icon is clicked
        content.burger.addEventListener("click", function () {
            this.classList.toggle("active");
            content.headerNav.classList.toggle("active");
            global.body.classList.toggle("overflow-hidden");
        });
    }

    return {
        callBurgerToggle: function () {
            burgerToggle();
        }
    }
})();

const slider = (function () {
    const content = {
        $slider: $('.slider')
    }

    const sliderActivate = function () {
        // toggle to mobile menu when burger icon is clicked
        content.$slider.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '300px',
            // rtl: false
        });
    }

    return {
        callSlickActivate: function () {
            sliderActivate();
        }
    }
})();

header.callBurgerToggle();
slider.callSlickActivate();