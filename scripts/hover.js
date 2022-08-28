//##############Images Hover#################
function largeImg(event) {
    console.log((event));
    const show = document.getElementById("big_image1");
    if (event.target.id === "jsimg1") {
        show.src = "/assets/images/bigpic1.jpg";
    }
    if (event.target.id === "jsimg2") {
        show.src = "/assets/images/bigpic2.jpg";
    }
    if (event.target.id === "jsimg3") {
        show.src = "/assets/images/bigpic3.jpg";
    }
    if (event.target.id === "jsimg4") {
        show.src = "/assets/images/bigpic4.jpg";
    }
    if (event.target.id === "jsimg5") {
        show.src = "/assets/images/bigpic5.jpg";
    }
    if (event.target.id === "jsimg6") {
        show.src = "/assets/images/bigpic6.jpg";
    }
    if (event.target.id === "jsimg7") {
        show.src = "/assets/images/bigpic7.jpg";
    }

    show.style.visibility = "visible";
}
function clearImg() {
    const img = document.getElementById("big_image1");
    img.src = "";
    img.style.visibility = "hidden";
}

