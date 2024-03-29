var sandwichToggle = function sandwichToggle() {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    var sandwichElements = document.querySelectorAll('.js-toggle'); // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс

    sandwichElements.forEach(function(item) {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        var targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        var body = document.querySelector('.body');
        var header = document.querySelector('.header');
        header.classList.toggle('is-active');
        body.classList.toggle('no-scroll');
        

        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
    }
};

sandwichToggle(); // Menu hiding lib

var links = document.getElementsByClassName('nav__link');
var elNodes = document.querySelectorAll(".nav__link");
var header = document.querySelector('.header');

for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener("click", function() {
        header.classList.remove('is-active');
        body.classList.remove('no-scroll');
    });
}

var fastOpener = document.getElementsByClassName('js-purchase');
var elNodes = document.querySelectorAll(".js-purchase");
var fastPopup = document.querySelector('.popup-order');
var fastCloser = document.querySelector('.popup-order__closer');

for (var i = 0; i < fastOpener.length; i++) {
    var fastBtn = fastOpener[i];
    fastBtn.addEventListener("click", function() {
        fastPopup.classList.add('is-active');
        body.classList.add('no-scroll');
    });
}

fastCloser.onclick = function() {
    fastPopup.classList.remove('is-active');
    body.classList.remove('no-scroll');
};

let giftRadio = document.querySelectorAll('input[name="order-gift"]');
let giftText = document.querySelector('.form__description');
let giftList = document.querySelector('.form__list--gift');
for (const i of giftRadio) {
    i.onchange = () => {
        giftText.classList.toggle('active');
        giftList.classList.toggle('active');
    }
}

var filterHead = document.querySelector(".filter__head");
var filterList = document.querySelector(".filter__list");
var filterItems = document.querySelectorAll(".filter__item");

// Add event listener to filter__head
filterHead.addEventListener("click", () => {
    // Toggle class "is-active" on filter__list
    filterList.classList.toggle("is-active");
});

// Add event listener to each filter__item
filterItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Get item textContent and data-type attribute
        var itemText = item.textContent;
        var itemType = item.getAttribute("data-type");
        console.log(itemType);
        // Set filter__head textContent and data-type attribute
        filterHead.textContent = itemText;
        filterHead.setAttribute("data-type", itemType);

        // Remove class "is-active" from filter__list
        filterList.classList.remove("is-active");
    });
});

// Add event listener to document
document.addEventListener("click", (event) => {
    // Check if clicked element is inside filter__list or filter__head
    const isClickInsideList = filterList.contains(event.target);
    const isClickInsideHead = filterHead.contains(event.target);
    if (!isClickInsideList && !isClickInsideHead) {
        // Remove class "is-active" from filter__list
        filterList.classList.remove("is-active");
    }
});
