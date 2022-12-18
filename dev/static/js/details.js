// Fetch all the details elements
const detailsP = document.querySelectorAll(".program__item");

// Add onclick listeners
detailsP.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all details that are not targetDetail
        detailsP.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});

// Fetch all the details elements
const detailsF = document.querySelectorAll(".faq__item");

// Add onclick listeners
detailsF.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all details that are not targetDetail
        detailsF.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});