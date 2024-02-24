const dialog = document.getElementById("dialog");
const paragraph = document.getElementById("paragraph");
const pojem = document.getElementById("produkt");
let barva = document.getElementById("barva");

function Objednávka(produkt) {
    dialog.showModal()
    barva.value = currentColor
    pojem.value = produkt;
    paragraph.innerHTML = produkt;
}