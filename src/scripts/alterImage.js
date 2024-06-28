let image = document.getElementById("mainImage")
let nextImg = document.getElementById("nextImg")
let previousImg = document.getElementById("previousImg")
let imageIndex = 1
let numberOfImages = 4

nextImg.onclick = function () {
    alterImage(1)
}

previousImg.onclick = function () {
    alterImage(-1)
}

function alterImage(n) {
    if (n > 0) {
        if (imageIndex == numberOfImages) {
            imageIndex = 1
            image.src = `src/assets/mainImage${imageIndex}.png`
        } else {
            imageIndex = imageIndex + 1
            image.src = `src/assets/mainImage${imageIndex}.png`
        }
    } else {
        if (imageIndex == 1) {
            imageIndex = numberOfImages
            image.src = `src/assets/mainImage${imageIndex}.png`
        } else {
            imageIndex = imageIndex - 1
            image.src = `src/assets/mainImage${imageIndex}.png`
        }
    }
}

