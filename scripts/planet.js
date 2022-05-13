class Planet {
  constructor(position, speed, radius, colour, size) {
    this.position = position
    this.speed = speed
    this.radius = radius
    this.colour = colour
    this.size = size
  }

  /**
   * Updates the current velocity and position of the planet, 
   * while checking for and responding to collisions
   * 
   * @param {*} deltaTime Time in seconds between frames
   */
  update(deltaTime) {
    let angle = atan2(this.position.y, this.position.x)
      + this.speed
      * deltaTime

    this.position.x = this.radius * cos(angle)
    this.position.y = this.radius * sin(angle)


    // var theta = atan2(this.position.y, this.position.x)
    //   * deltaTime
    //   + this.speed

    // this.position.x += this.radius * sin(theta)
    // this.position.y += this.radius * cos(theta)
  }

  /**
   * Draws the shape on screen at its current position
   */
  draw() {
    fill(this.colour)
    circle(this.position.x, this.position.y, this.size)
  }
}