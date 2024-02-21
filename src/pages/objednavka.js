const dialog = document.getElementById("dialog");
const paragraph = document.getElementById("paragraph");
const pojem = document.getElementById("produkt");
const barvicka = document.getElementById("barva");
function Objednávka(produkt) {
    dialog.showModal()
    pojem.value = produkt;
    paragraph.innerHTML = produkt;
    barvicka.value = barva;
}