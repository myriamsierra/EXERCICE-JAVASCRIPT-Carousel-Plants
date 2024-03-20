let gallery = document.querySelector(".gallery");
let startBtn = document.querySelector(".arrow");
let endBtn = document.querySelector(".arrow-end")
let all = document.querySelector("body")

all.addEventListener("wheel", (event) => {
    event.preventDefault();
    gallery.scrollLeft += event.deltaY;
    gallery.style.scrollBehavior = "auto";
});

startBtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += 900;
})

endBtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += -900;
})

