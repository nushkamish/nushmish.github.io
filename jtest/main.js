
 let blobs = document.querySelectorAll(".blob");
  let container = document.querySelector(".wrapper");
  // place our blobs randomly

container.addEventListener("click", blobDrop)

function blobDrop() {
    let newBlob = document.createElement("div");
    newBlob.classList.add("blob");
    container.appendChild(newBlob);
    newBlob.style.right = event.clientX + "px";
    newBlob.style.top = event.clientY + "px";
    console.log(event, event.clientX);
}
