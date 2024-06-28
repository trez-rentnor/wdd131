const temp = 26;
const wind = 5;

const wind_chill = document.querySelector("#wind_chill");

const calculateWindChill = (temp, wind) =>
    13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind ** 0.16;

if (temp <= 10 && wind > 4.8) {
    wind_chill.textContent = calculateWindChill(temp, wind);
} else {
    wind_chill.textContent = "N/A";
}