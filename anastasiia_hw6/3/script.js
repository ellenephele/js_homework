var galleryArray = ["item1.png", "item2.png", "item3.png",],
    currentIndex = 0,
    img = document.getElementsByClassName("slider")[0];

function forward() {
    (currentIndex == galleryArray.length - 1) ? currentIndex = 0 : currentIndex++;
    img.src = "img/" + galleryArray[currentIndex];
}

function back() {
    (currentIndex == 0) ? currentIndex = galleryArray.length - 1 : currentIndex--;
    img.src = "img/" + galleryArray[currentIndex];
}