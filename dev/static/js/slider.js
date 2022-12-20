var swiper = new Swiper('.teacher__slider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    draggable: true,
    grabCursor: true,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 8,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,

            grid: {
                fill: 'row',
                rows: 2,
                columns: 2,
            },

            navigation: {
                nextEl: '.teacher__controls-next',
                prevEl: '.teacher__controls-prev',
            },
        },

        1440: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            draggable: true,
            grabCursor: true,

            navigation: {
                nextEl: '.teacher__controls-next',
                prevEl: '.teacher__controls-prev',
            },
        }
    }
});

var swiper2 = new Swiper('.process__slider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    slidesPerGroup: 1,
    draggable: true,

    on: {
        init: function () {
            var titles = [];
            $(".process__caption").each(function(i) {
                titles.push($(this).data("title"));
            });
            var curIndex = document.querySelector('.swiper-pagination-current').innerText;
            var currentNum = parseInt(curIndex);
            var newCap = document.querySelector('.process__newcap');
            newCap.innerText = titles[currentNum - 1];
        },

        slideChange: function () {
            var titles = [];
            $(".process__caption").each(function(i) {
                titles.push($(this).data("title"));
            });
            var curIndex = document.querySelector('.swiper-pagination-current').innerText;
            var currentNum = parseInt(curIndex);
            var newCap = document.querySelector('.process__newcap');
            newCap.innerText = titles[currentNum - 1];
        }
    },
    pagination: {
        el: '.process__pagination',
        type: 'fraction',
        clickable: true,

        renderFraction: function (currentClass, totalClass) {
            var title = "<span class='process__newcap'></span>";
        return '<span class="' + currentClass + '"></span>' + ' <span class="process__divider">/</span> ' + '<span class="' + totalClass + '"></span>' + title; }
    },

    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 8,
            slidesPerGroup: 1,
            draggable: true,
            on: {
                init: function () {
                    var titles = [];
                    $(".process__caption").each(function(i) {
                        titles.push($(this).data("title"));
                    });
                    var curIndex = document.querySelector('.swiper-pagination-current').innerText;
                    var currentNum = parseInt(curIndex);
                    var newCap = document.querySelector('.process__newcap');
                    newCap.innerText = titles[currentNum - 1];
                },

                slideChange: function () {
                    var titles = [];
                    $(".process__caption").each(function(i) {
                        titles.push($(this).data("title"));
                    });
                    var curIndex = document.querySelector('.swiper-pagination-current').innerText;
                    var currentNum = parseInt(curIndex);
                    var newCap = document.querySelector('.process__newcap');
                    newCap.innerText = titles[currentNum - 1];
                }
            },
            pagination: {
                el: '.process__pagination',
                type: 'fraction',
                clickable: true,

                renderFraction: function (currentClass, totalClass) {
                    var title = "<span class='process__newcap'></span>";
                return '<span class="' + currentClass + '"></span>' + ' <span class="process__divider">/</span> ' + '<span class="' + totalClass + '"></span>' + title; }
            },
        },

        768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            draggable: true,
            grabCursor: true,
            on: {
                init: function () {
                    var titles = [];
                    $(".process__caption").each(function(i) {
                        titles.push($(this).data("title"));
                    });
                    var curIndex = document.querySelector('.swiper-pagination-current').innerText;
                    var currentNum = parseInt(curIndex);
                    var newCap = document.querySelector('.process__newcap');
                    newCap.innerText = titles[currentNum - 1];
                },

                slideChange: function () {
                    var titles = [];
                    $(".process__caption").each(function(i) {
                        titles.push($(this).data("title"));
                    });
                    var curIndex = document.querySelector('.swiper-pagination-current').innerText;
                    var currentNum = parseInt(curIndex);
                    var newCap = document.querySelector('.process__newcap');
                    newCap.innerText = titles[currentNum - 1];
                }
            },
            pagination: {
                el: '.process__pagination',
                type: 'fraction',
                clickable: true,

                renderFraction: function (currentClass, totalClass) {
                    var title = "<span class='process__newcap'></span>";
                return '<span class="' + currentClass + '"></span>' + ' <span class="process__divider">/</span> ' + '<span class="' + totalClass + '"></span>' + title; }
            },
            navigation: {
                nextEl: '.process__controls-next',
                prevEl: '.process__controls-prev',
            },
        }
    }
});

var swiper3 = new Swiper('.review__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    draggable: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".review__pagination",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            draggable: true,
            watchSlidesProgress: true,
        },

        768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            draggable: true,
            grabCursor: true,
            watchSlidesProgress: true,

            navigation: {
                nextEl: '.review__controls-next',
                prevEl: '.review__controls-prev',
            },
        }
    }
});