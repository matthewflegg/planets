// Display
const WIDTH = 600;
const HEIGHT = 600; 

// Maths
const DELTA_TIME = 1 / 60;  // Reciprocal of the frame rate

// Colours
const BACKGROUND = '#111111';
const SUN_COLOR = '#fcf136';

// Speed will be in km/s
// Can be scaled accordingly with a slider
let planets = [];
let planetInfo = [
  { speed: 47.4, radius: 1.0, color: '#d1a24b', size: 1.0 },  // Mercury
  { speed: 35.0, radius: 1.8, color: '#dfdde1', size: 2.5 },  // Venus
  { speed: 29.8, radius: 2.5, color: '#2a4b6a', size: 2.6 },  // Earth
  { speed: 24.1, radius: 3.9, color: '#b3460f', size: 1.3 },  // Mars
  { speed: 13.1, radius: 13.4, color: '#e46305', size: 28.6 }, // Jupiter
  { speed: 9.7, radius: 24.6, color: '#ecb24f', size: 23.9 },  // Saturn
  { speed: 6.8, radius: 49.5, color: '#40dbdf', size: 10.3 },  // Uranus
  { speed: 5.2, radius: 77.6, color: '#4671fe', size: 10.0 },  // Neptune
];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(BACKGROUND);

  // Add all of the planets to a list
  planetInfo.map(planet => {
    planets.push(
      new Planet(
        createVector(0, planet.radius),
        planet.speed,
        planet.radius,
        color(planet.color),
        planet.size
      )
    )
  });
}
  
function draw() {
  background(BACKGROUND);

  // Update and draw each planet
  planets.forEach(planet => {
    planet.update(DELTA_TIME);
    planet.draw();
  });
}