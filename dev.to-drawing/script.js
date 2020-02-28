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

function startPaint(e) {
  isPainting = true;
  let coordinates = getCoordinates(e);
  console.log(coordinates);
}

canvas.addEventListener("mousedown", startPaint);
canvas.addEventListener("touchstart", startPaint);
