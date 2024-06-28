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
            disableAllImages()
            document.getElementById(`mainImage${imageIndex}`).style.display = "unset"
        } else {
            imageIndex = imageIndex + 1
            disableAllImages()
            document.getElementById(`mainImage${imageIndex}`).style.display = "unset"
        }
    } else {
        if (imageIndex == 1) {
            imageIndex = numberOfImages
            disableAllImages()
            document.getElementById(`mainImage${imageIndex}`).style.display = "unset"
        } else {
            imageIndex = imageIndex - 1
            disableAllImages()
            document.getElementById(`mainImage${imageIndex}`).style.display = "unset"
        }
    }
}

function disableAllImages() {
    document.getElementById(`mainImage1`).style.display = "none"
    document.getElementById(`mainImage2`).style.display = "none"
    document.getElementById(`mainImage3`).style.display = "none"
    document.getElementById(`mainImage4`).style.display = "none"
    document.querySelectorAll(".main__img").forEach(element => {
        element.style.animation = "none"
    });    
}
