/**
 * Change different color when user take an action on draggable comp
 */
function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.currentTarget.dataset.table);
  event.currentTarget.style.backgroundColor = "pink";
}

function onDragEnd(event) {
  event.currentTarget.style.backgroundColor = "mediumseagreen";
}

function onDragOver(event) {
  event.preventDefault();
}

// Using data trasfer api

const dropzone = document.getElementById("dropzone");

function onDrop(event) {
  let id = event.dataTransfer.getData("text");

  const draggableElement = document.getElementById(id);
  const clone = draggableElement.cloneNode(true);

  dropzone.appendChild(clone);

  event.dataTransfer.clearData();
}
