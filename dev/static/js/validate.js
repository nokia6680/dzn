"use strict";

function validationTel() {
    var tel = document.querySelector('.js-phone-input').value;
    var telInput = document.querySelector('.js-phone-input');
    var textTel = document.querySelector('.form__error--tel');
    var patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;

    if (tel == '') {
        telInput.classList.add('invalid');
        textTel.classList.remove('hidden');
        textTel.innerHTML = "Поле должно быть заполнено";
        return false;
    }

    if (tel.match(patternTel)) {
        textTel.classList.add('hidden');
        telInput.classList.remove('invalid');
    } else {
        telInput.classList.add('invalid');
        textTel.classList.remove('hidden');
        textTel.innerHTML = "Телефон указан неверно";
    }

    if (tel == '+') {
        textTel.classList.add('hidden');
        telInput.classList.remove('invalid');
        textTel.innerHTML = "";
    }

    if (tel == '+7 (') {
        textTel.classList.add('hidden');
        telInput.classList.remove('invalid');
        textTel.innerHTML = "";
    }
}

;

function validationMail() {
    var email = document.querySelector('.js-mail-input').value;
    var emailInput = document.querySelector('.js-mail-input');
    var textMail = document.querySelector('.form__error--mail');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (email == '') {
        emailInput.classList.add('invalid');
        textMail.classList.remove('hidden');
        textMail.innerHTML = "Поле должно быть заполнено";
        return false;
    }

    if (email.match(pattern)) {
        emailInput.classList.remove('invalid');
        textMail.classList.add('hidden');
    } else {
        emailInput.classList.add('invalid');
        textMail.classList.remove('hidden');
        textMail.innerHTML = "Некорректно введена почта";
    }

    if (email == '') {
        emailInput.classList.remove('invalid');
        textMail.classList.add('hidden');
        textMail.innerHTML = "";
    }
}

function validationMailSubscribe() {
    var email = document.querySelector('.js-mail-input').value;
    var emailInput = document.querySelector('.js-mail-input');
    var textMail = document.querySelector('.footer__subscribe-error');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (email == '') {
        emailInput.classList.add('invalid');
        textMail.classList.remove('hidden');
        textMail.innerHTML = "Поле должно быть заполнено";
        return false;
    }

    if (email.match(pattern)) {
        emailInput.classList.remove('invalid');
        textMail.classList.add('hidden');
    } else {
        emailInput.classList.add('invalid');
        textMail.classList.remove('hidden');
        textMail.innerHTML = "Некорректно введена почта";
    }

    if (email == '') {
        emailInput.classList.remove('invalid');
        textMail.classList.add('hidden');
        textMail.innerHTML = "";
    }
}


function validationName() {
    var name = document.querySelector('.js-name-input').value;
    var nameInput = document.querySelector('.js-name-input');
    var textName = document.querySelector('.form__error--name');
    var pattern = /^[а-яА-Яё ]+$/;

    if (name == '') {
        nameInput.classList.add('invalid');
        textName.classList.remove('hidden');
        textName.innerHTML = "Поле должно быть заполнено";
        return false;
    }

    if (name.match(pattern)) {
        nameInput.classList.remove('invalid');
        textName.classList.add('hidden');
    } else {
        nameInput.classList.add('invalid');
        textName.classList.remove('hidden');
        textName.innerHTML = "Допускается использование только кириллицы";
    }

    if (name == '') {
        nameInput.classList.remove('invalid');
        textName.classList.add('hidden');
        textName.innerHTML = "";
    }
}
