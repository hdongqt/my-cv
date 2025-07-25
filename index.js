const containerElement = document.getElementById("container");
const mouseMagicElement = document.getElementById("mouse-magic");

containerElement.addEventListener("mousemove", (event) => {
  const posX = event.clientX;
  const posY = event.clientY;
  mouseMagicElement.style.display = "block";
  mouseMagicElement.style.top = `${posY}px`;
  mouseMagicElement.textContent = `${mouseMagicElement.textContent.slice(
    0,
    10
  )}${posX}${posY}${mouseMagicElement.textContent.slice(10, 200)}`;
  mouseMagicElement.style.left = `${posX}px`;
});

containerElement.addEventListener("mouseleave", () => {
  mouseMagicElement.style.display = "none";
});
