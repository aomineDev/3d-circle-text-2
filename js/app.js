Splitting();

let circle = document.querySelector(".circle");

window.onmousemove = (e) => {
  let x = e.clientX / -2;
  circle.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(15deg)`;
};
