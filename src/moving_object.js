class MovingObject {

  constructor(optionsObj) {
    this.pos = optionsObj.pos;
    this.vel = optionsObj.vel;
    this.radius = optionsObj.radius;
    this.color = optionsObj.color;
  }

  draw(ctx) {
      console.log("drawing MovingObject")
    ctx.fillStyle = this.color;
    ctx.beginPath()
    ctx.arc( 100, 100, 20, 0, 2 * Math.PI)
    ctx.strokeStyle = "purple"
    ctx.lineWidth = 10
    ctx.fill()
    ctx.stroke()
    // ctx.closePath()
  }


}
module.exports = MovingObject;
