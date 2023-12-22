let cou = document.querySelector(".carousel");
let arr = document.querySelectorAll(".wrapper i");
let images = document.querySelectorAll("img");
let Fimage = document.querySelectorAll("img")[0];
let firstImgWidth = Fimage.clientWidth ;
let index = 0;
let maxWidth = cou.scrollWidth - cou.clientWidth;
arr.forEach(btn => {
    btn.addEventListener("click", (e) => {
    if(index != 0&&index!=5) {
            console.log(index);
            cou.scrollLeft += btn.id == "left" ? -firstImgWidth : firstImgWidth;
        }
        
        
        if (btn.id == "right") {
            images[index].classList.remove("show");
            index++;
            if (index > 5) {
                cou.scrollLeft = 0;
                index = 0;
            }
            images[index].classList.add("show");
        }
        else {
            images[index].classList.remove("show");
            index--;
            if (index < 0) {
                index = 5;
                cou.scrollLeft = cou.scrollWidth;
                images[index].classList.add("show");
            }
            else {
                images[index].classList.add("show");
            }
        }
        
    })
})
let isDragging = false, prevPagX, prevScrollLeft;

cou.addEventListener("mousedown", function (e) {
    isDragging = true
    prevPagX = e.pageX;
    prevScrollLeft = cou.scrollLeft;
})
cou.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    e.preventDefault();
    let position = e.pageX - prevPagX;
    cou.scrollLeft = prevScrollLeft - position;
})
cou.addEventListener("mouseup", function () {
    isDragging = false;
})