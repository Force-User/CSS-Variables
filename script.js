"use strict";
const inputs = document.querySelector(".inputs");
inputs.addEventListener("change", (e) => {
  const currentInput = e.target.closest("input");
  if (currentInput) {
    const sufix = currentInput.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--${currentInput.name}`,
      currentInput.value + sufix
    );
  }
});

inputs.addEventListener("mousemove", (e) => {
  const currentInput = e.target.closest("input");
  if (currentInput) {
    const sufix = currentInput.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--${currentInput.name}`,
      currentInput.value + sufix
    );
  }
});
