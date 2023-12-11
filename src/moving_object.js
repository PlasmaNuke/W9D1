class MovingObject {

  constructor(optionsObj) {
    this.pos = optionsObj.pos;
    this.vel = optionsObj.vel;
    this.radius = optionsObj.radius;
    this.color = optionsObj.color;
  }

  draw = function(ctx){
    ctx.beginPath()
    ctx.arc( 250, 250, 50, 0, 2 * Math.PI)
    ctx.strokeStyle = "white"
    ctx.lineWidth = 10
    ctx.fillStyle = "brown"
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }


}
module.exports = MovingObject;
