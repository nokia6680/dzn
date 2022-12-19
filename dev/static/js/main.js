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