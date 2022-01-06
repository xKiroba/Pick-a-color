const color = document.querySelector("#color");
const out = document.querySelector("#out");

color.addEventListener("input", () => {
    const seleccionar = color.value;
    out.innerHTML = seleccionar;
    out.style.background = seleccionar;
    out.style.color = "#fff";
})