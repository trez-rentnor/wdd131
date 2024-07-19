const colors = [
    {
        name: "vanilla",
        hex: "#dbe2a1",
        hex: "#dbe2a1",
        textColor: " #000000",
        usages: "Page background"
    },
    {
        name: "mindaro",
        hex: " #dde392ff",
        textColor: " #000000",
        usages: "Light text on dark background"
    },
    {
        name: "drab-dark-brown",
        hex: " #504b3aff",
        textColor: " #dde392ff",
        usages: "Dark background, dark text on light background, borders"
    }
];

const fonts = [
    {
        name: "Kanit",
        usages: "Headings"
    },
    {
        name: "Quicksand",
        usages: "Normal text"
    }
];

// Populate color table
const color_table = document.getElementById("colors");

for (var color of colors) {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = color.name + " (" + color.hex + ")";
    name.style.backgroundColor = color.hex;
    name.style.color = color.textColor;
    name.className = "color-sample"
    row.appendChild(name);

    const usages = document.createElement("td");
    usages.textContent = color.usages;
    row.appendChild(usages);

    color_table.appendChild(row);
}

// Populate fone table
const font_table = document.getElementById("fonts");

for (var font of fonts) {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = font.name;
    name.style.fontFamily = font.name;
    name.className = "font-sample"
    row.appendChild(name);

    const usages = document.createElement("td");
    usages.textContent = font.usages;
    row.appendChild(usages);

    font_table.appendChild(row);
}