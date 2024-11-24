let bars = document.querySelector("#bars");
let list = document.querySelector("#selection-window");

bars.onclick = (event) => {
    event.stopPropagation();
    list.classList.toggle("visible");
}
window.onclick = () => {
    if (list.classList.contains("visible")) {
        list.classList.remove("visible");
    }
}