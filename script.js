const space = document.querySelector('.space');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = Math.random() * 3 + 'px';
  star.style.height = star.style.width;
  star.style.left = 0;
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDuration = Math.random() * 10 + 20 + 's'; // Adjust duration for each star
  space.appendChild(star);
}

setInterval(createStar, 250);
