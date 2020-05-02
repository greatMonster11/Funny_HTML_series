(() => {
  const context = document.getElementById("canvas").getContext("2d");
  const canvas = context.canvas;
  const sceneColor = "#00AAFF";
  const w = 220; // Width Frame in the Spirit Sheet
  const h = 450; // Height Frame in the Spirit Sheet
  const maxFrameLength = 3; // the Frame for the walking cycle
  const scale = 1; // scale of the frame
  let delay = 4; // delay till animatint the next frame
  let count = 0; // counter for the delay
  let currentFrameX = 1; // start FrameX

  const centerCanvas = () => {
    canvas.style.marginTop = `${window.innerHeight / 2 - canvas.height / 2}px`;
  };

  // Listen to slider to update the delay value
  const range = document.getElementById("fps");
  range.addEventListener("change", (e) => {
    delay = e.target.value;
  });

  // Multify canvas by the scale value to fit the image
  canvas.width = w * scale;
  canvas.height = h * scale;

  // set the background color
  document.body.style.background = sceneColor;
  canvas.style.background = sceneColor;

  centerCanvas();

  const animate = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const frameX = currentFrameX;
    const frameY = 0;
    const sx = 8 + frameX * w;
    const sy = frameY * h;

    if (count > delay) {
      currentFrameX++;
      count = 0;
    }

    if (currentFrameX > maxFrameLength) currentFrameX = 1;

    context.drawImage(spriteSheet, sx, sy, w, h, 0, 0, w * scale, h * scale);
  };

  const frame = () => {
    animate();
    requestAnimationFrame(frame);
  };

  // Load the spit
  const spriteSheet = new Image();
  spriteSheet.src = "mario.png";

  // start the animation
  spriteSheet.onload = () => {
    frame();
  };
})();
