let teacherItem = document.getElementsByClassName('teacher__item');
let elNodes = document.querySelectorAll('.teacher__item');
let body = document.querySelector(".body");
let popupTeacher = document.querySelector(".popup-teacher");
let popupFrame = document.querySelector(".popup-teacher__frame");
let popupSource = popupFrame.querySelector("source");
let popupImage = popupFrame.querySelector("img");
let popupCloser = document.querySelector(".popup-teacher__closer"); 

let teacherName = document.querySelector(".popup-teacher__bio-name");
let teacherPos = document.querySelector(".popup-teacher__bio-position");
let teacherAbout = document.querySelector(".popup-teacher__info-about");
let teacherDescr = document.querySelector(".popup-teacher__info-description");

for (var i = 0; i < teacherItem.length; i++) {
    let elem = teacherItem[i];

    elem.addEventListener("click", function() {
        popupTeacher.classList.add("is-active");
        body.classList.add("no-scroll");
        let elemData = this.querySelector(".teacher__data");
        let elemName = elemData.getAttribute("data-name");
        let elemPos = elemData.getAttribute("data-position");
        let elemPic = elemData.getAttribute("data-image");
        let elemAbout = elemData.getAttribute("data-about");
        let elemDescr = elemData.getAttribute("data-description");
        popupSource.setAttribute("srcset", elemPic + ".webp");
        popupImage.setAttribute("src", elemPic + ".jpg");

        teacherName.textContent = elemName;
        teacherPos.textContent = elemPos;
        teacherAbout.textContent = elemAbout;
        teacherDescr.textContent = elemDescr;
    });
};

popupCloser.onclick = function() {
    popupTeacher.classList.remove('is-active');
    body.classList.remove('no-scroll');
}