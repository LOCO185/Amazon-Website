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
// ################Scroll###########################
// function scrolLeft() {
//     const left = document.getElementById("arrow1");
//     left.scrollLeft = 0;
// }

// function scrolRight() {
//     const left = document.getElementById("arrow2");
//     left.scrollLeft = 1000;
// }

// const span = document.getElementsByTagName('span');
// const div = document.getElementsByTagName('div');
// let j = 0;
// arrow1[1].onclick = () => {
//     j++;
//     for(let i of div) {
//         if(j == 0) {i.style.left = "0px";}
//         if(j == 1) {i.style.left = "-740px";}
//         if(j == 2) {i.style.left = "-1480px";}
//         if(j == 3) {i.style.left = "-2220px";}
//         if(j == 4) {i.style.left = "-2960px";}
//         if(j > 4) {j = 4;}
//     }
// }