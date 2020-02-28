const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);

let x, y, isPainting;

function getCoordinates(event) {
  // check to see if mobile or desktop
  if (["mousedown", "mousemove"].includes(event.type)) {
    return [event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop];
  } else {
    // touch coordinates
    return [
      event.touches[0].pageX - canvas.offsetLeft,
      event.touches[0].pageY - canvas.offsetTop
    ];
  }
}

function drawLine(firstX, firstY, secondX, secondY) {
  // set attribute of the line
  context.strokeStyle = "black";
  context.lineJoin = "round";
  context.lineWidth = 5;

  context.beginPath();
  context.moveTo(secondX, secondY);
  context.lineTo(firstX, firstY);
  context.closePath();

  // actually draw the path *
  context.stroke();
}

function paint(e) {
  if (isPainting) {
    let [newX, newY] = getCoordinates(e);
    drawLine(x, y, newX, newY);

    // set x, y to our new coordinates
    x = newX;
    y = newY;
  }
}

canvas.addEventListener("mousemove", paint);
canvas.addEventListener("touchmove", paint);

function startPaint(e) {
  isPainting = true;
  let coordinates = getCoordinates(e);
  x = coordinates[0];
  y = coordinates[1];
}

canvas.addEventListener("mousedown", startPaint);
canvas.addEventListener("touchstart", startPaint);

// stop drawing event
function exit() {
  isPainting = false;
}

canvas.addEventListener("mouseup", exit);
canvas.addEventListener("mouseleave", exit);
canvas.addEventListener("touchend", exit);
