const slider = document.querySelector('.slider');
const beforeImage = document.querySelector('.before');
const afterImage = document.querySelector('.after');
const imgContainer = document.querySelector('.img-container');

function slide(event) {
    const containerWidth = imgContainer.offsetWidth;
    let offsetX = event.clientX - imgContainer.getBoundingClientRect().left;

    // Constrain offset to image bounds
    if (offsetX < 0) offsetX = 0;
    if (offsetX > containerWidth) offsetX = containerWidth;

    slider.style.left = `${offsetX}px`; // Move the slider
    afterImage.style.clip = `rect(0, ${offsetX}px, ${beforeImage.offsetHeight}px, 0)`; // Clip the after image
}

// Optional: For dragging the slider
let isDragging = false;

slider.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        slide(event);
    }
});

// Add touch events
imgContainer.addEventListener('touchstart', (event) => {
    isDragging = true;
    slide(event.touches[0]);
});

imgContainer.addEventListener('touchend', () => {
    isDragging = false;
});

imgContainer.addEventListener('touchmove', (event) => {
    if (isDragging) {
        slide(event.touches[0]);
    }
});
