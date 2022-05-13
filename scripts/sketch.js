const WIDTH = 850
const HEIGHT = 850
const DELTA_TIME = 1 / 60
const BACKGROUND = '#111111'
const ORBIT_COLOR = 'rgba(34, 34, 34, 0.02)'
const PARTICLE_COLOR = 'rgba(0, 0, 0, 0.8)'
const SUN_COLOR = '#fcf136'
const SUN_SIZE = 30

let particles = []
let slider

// Speed will be in km/s
// Can be scaled accordingly with a slider
let planets = []
let params = [
  { speed: 47.4, radius: 1.0, color: '#dfdde1', size: 1.0 },  // Mercury
  { speed: 35.0, radius: 1.8, color: '#d1a24b', size: 2.5 },  // Venus
  { speed: 29.8, radius: 2.5, color: '#2a4b6a', size: 2.6 },  // Earth
  { speed: 24.1, radius: 3.9, color: '#b3460f', size: 1.3 },  // Mars
  { speed: 13.1, radius: 13.4, color: '#e46305', size: 28.6 }, // Jupiter
  { speed: 9.7, radius: 24.6, color: '#ecb24f', size: 23.9 },  // Saturn
  { speed: 6.8, radius: 49.5, color: '#40dbdf', size: 10.3 },  // Uranus
  { speed: 5.2, radius: 77.6, color: '#4671fe', size: 10.0 },  // Neptune
]

/**
 * Adds a speed modifier to the planets
 */
const multiplySpeed = (planets, multiplier) => {
  return planets.map(planet => {
    planet.speed *= multiplier
  })
}

/**
 * Adds a radius modifier to the planets
 */
const multiplyRadius = (planets, multiplier) => {
  return planets.map(planet => {
    planet.radius *= multiplier
  })
}

/**
 * Creates a single planet object
 */
const createPlanet = (params) => {
  position = createVector(0, params.radius)

  return new Planet(
    position,
    params.speed,
    params.radius,
    params.color,
    params.size,
  )
}

/**
 * Draws the sun in the centre of the canvas
 */
const drawSun = () => {
  fill(SUN_COLOR)
  circle(0, 0, SUN_SIZE * 2)
}

/**
 * Draws lines showing the planet's orbital paths
 */
const drawOrbits = (planets, color) => {
  stroke(color)
  noFill()

  planets.forEach(planet => {
    circle(0, 0, planet.radius * 2)
  })
}

/** 
 * Creates a specified amount of random particles
 */
const createParticles = (particles, amount) => {
  for (var x = 0; x < amount; x++) {
    particles.push({
      x: random(-WIDTH / 2, WIDTH / 2),
      y: random(-HEIGHT / 2, HEIGHT / 2),
      r: random(0, 1),
    })
  }

  return particles
}

/**
 * Called before the main update loop
 */
function setup() {
  createCanvas(WIDTH, HEIGHT, WEBGL)


  planets = params.map(createPlanet)
  planets.forEach(planet => {
    planet.size *= 1.1
    planet.speed /= 25
    planet.radius += 7.5
    planet.radius *= 4.75
  })
}

/**
 * Performs the main update loop
 */
function draw() {
  background(BACKGROUND)
  noStroke()
  drawSun()

  planets.forEach(planet => {
    planet.update(DELTA_TIME)
    planet.draw()
  })

  drawOrbits(planets, ORBIT_COLOR)
}