'use strict';
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("change",changeSecsses);
});
inputs.forEach(input => {
    input.addEventListener("mousemove",changeSecsses);
}); 

function changeSecsses() {
    const sufix = this.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value + sufix)
}