const four = document.querySelector(`.test`);
const display = document.querySelector(`.display`);

const kill = () => {
  document.onmousemove = null;
};

const logging = (e) => {
  document.onmousemove = move;
};

const move = (e) => {
  four.style.left = e.clientX + 'px';
  display.textContent = `${e.clientX}px`;
  if (e.clientX >= 550) {
    four.style.left = '550px';
  }
  if (e.clientX <= 0) {
    four.style.left = '0px';
  }
  document.onmouseup = kill;
};

four.onmousedown = logging;
