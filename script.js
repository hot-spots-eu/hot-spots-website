const fixCarouselImageHeight = () => {
    let carousel = document.getElementById("carousel");
    
    let height = carousel.offsetHeight;

    var carouselImages = document.getElementsByClassName("carousel-item");

    for(let i=0; i<carouselImages.length; i++) {
        carouselImages[i].style["max-height"] = `${height}px`;
        carouselImages[i].style["min-height"] = `${height}px`;
    }
}

addEventListener("resize", (event) => {
    fixCarouselImageHeight();
});


window.onload = () => {
    fixCarouselImageHeight();
}
