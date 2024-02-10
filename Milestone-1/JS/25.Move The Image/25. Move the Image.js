const movingImage = document.getElementById("movingImage");
const container = document.getElementById("container");

// Initial position of the image.
let posX = 0;
let posY = 0;

// Amount to move the image in pixels.
const moveAmount = 10;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            posY -= moveAmount;
            break;
        case "ArrowDown":
            posY += moveAmount;
            break;
        case "ArrowLeft":
            posX -= moveAmount;
            break;
        case "ArrowRight":
            posX += moveAmount;
            break;
    }

    // Update the image's position.
    movingImage.style.top = posY + "px";
    movingImage.style.left = posX + "px";
});
