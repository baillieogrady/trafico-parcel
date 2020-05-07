import './scss/index.scss';

// globals
const global = {
    body: document.querySelector("body")
}

// header
const header = (function(){
    const content = {
        burger: document.querySelector(".burger"),
        headerNav: document.querySelector(".header__nav")
    }
        
    const burgerToggle = function() {
        // toggle to mobile menu when burger icon is clicked
        content.burger.addEventListener("click", function() {
            this.classList.toggle("active");
            content.headerNav.classList.toggle("active");
            global.body.classList.toggle("overflow-hidden");
        });
    }

    return {
        callBurgerToggle: function() {
            burgerToggle();
        }
    }
})();

header.callBurgerToggle();