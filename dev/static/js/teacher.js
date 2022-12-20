"use strict";

var teacherItem = document.getElementsByClassName('teacher__item');
var elNodes = document.querySelectorAll('.teacher__item');
var body = document.querySelector(".body");
var popupTeacher = document.querySelector(".popup-teacher");
var popupFrame = document.querySelector(".popup-teacher__frame");
var popupSource = popupFrame.querySelector("source");
var popupImage = popupFrame.querySelector("img");
var popupCloser = document.querySelector(".popup-teacher__closer");
var teacherName = document.querySelector(".popup-teacher__bio-name");
var teacherPos = document.querySelector(".popup-teacher__bio-position");
var teacherAbout = document.querySelector(".popup-teacher__info-about");
var teacherDescr = document.querySelector(".popup-teacher__info-description");

for (var i = 0; i < teacherItem.length; i++) {
  var elem = teacherItem[i];
  elem.addEventListener("click", function () {
    popupTeacher.classList.add("is-active");
    body.classList.add("no-scroll");
    var elemData = this.querySelector(".teacher__data");
    var elemName = elemData.getAttribute("data-name");
    var elemPos = elemData.getAttribute("data-position");
    var elemPic = elemData.getAttribute("data-image");
    var elemAbout = elemData.getAttribute("data-about");
    var elemDescr = elemData.getAttribute("data-description");
    //popupSource.setAttribute("srcset", elemPic + ".webp");
    popupImage.setAttribute("src", elemPic);
    teacherName.textContent = elemName;
    teacherPos.textContent = elemPos;
    teacherAbout.textContent = elemAbout;
    teacherDescr.textContent = elemDescr;
  });
}

;

popupCloser.onclick = function () {
  popupTeacher.classList.remove('is-active');
  body.classList.remove('no-scroll');
};