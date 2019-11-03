const planets = [
  ["mercury", 0.378],
  ["venus", 0.907],
  ["earth", 1],
  ["mars", 0.377],
  ["jupiter", 2.528],
  ["saturn", 1.064],
  ["uranus", 0.889],
  ["neptune", 1.125]
];

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

window.onload = function() {
  const container = document.getElementById("planet-container");
  let currentPlanet = document.getElementById("planet-item");
  for ([planet, factor] of planets) {
    const nextPlanet = currentPlanet.cloneNode(true);
    currentPlanet.id = planet + "-item";
    const label = document.getElementById("planet-label");
    label.id = planet + "-label";
    label.innerText = capitalize(planet);
    const label2 = document.getElementById("planet-label2");
    label2.id = planet + "-label2";
    label2.innerText = capitalize(planet);
    const weight = document.getElementById("planet-weight");
    weight.id = planet + "-weight";
    weight.value = factor;
    const image = document.getElementById("planet-image");
    image.id = planet + "-image";
    image.src = "./assets/" + planet + ".svg";
    const unit = document.getElementById("planet-unit");
    unit.id = planet + "-unit";
    const url = document.getElementById("planet-url");
    url.href =
      "https://en.wikipedia.org/wiki/" +
      planet +
      (planet === "mercury" ? "_(planet)" : "");
    url.id = planet + "-url";
    container.appendChild(nextPlanet);
    currentPlanet = nextPlanet;
  }
  currentPlanet.parentNode.removeChild(currentPlanet);
};

function calculateWeights() {
  const inputWeight = document.getElementById("input-weight");
  const earthWeight = inputWeight.value;

  for (const [planet, factor] of planets) {
    const planetWeight = factor * earthWeight;
    weight = document.getElementById(planet + "-weight");
    unit = document.getElementById(planet + "-unit");
    weight.innerText = Math.round(planetWeight * 100) / 100;
    if (planetWeight === 1) {
      unit.innerText = "pound";
    } else {
      unit.innerText = "pounds";
    }
  }
}
