let currentIndex = 0;
const slider = document.getElementById("slider");
const totalImages = slider.children.length;

function slide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 600;
  slider.style.transform = `translateX(${offset}px)`;
}
