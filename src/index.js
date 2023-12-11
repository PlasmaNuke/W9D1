console.log("Webpack is working!");

// const MovingObject = require("./moving_object.js");

import MovingObject from "./moving_object.js";

document.addEventListener("DOMContentLoaded", () => {

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// window.MovingObject = MovingObject;

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

mo.draw(ctx)
});