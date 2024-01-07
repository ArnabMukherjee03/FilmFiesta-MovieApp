const breakpoints = { sm: 640,md: 768, lg: 1024 };
let innerWidth;

function updateScreenWidth() {
  innerWidth = window.innerWidth;
}

function handleResize() {
  updateScreenWidth();
}

updateScreenWidth();

window.addEventListener("resize", handleResize);

window.addEventListener("unload", function () {
  window.removeEventListener("resize", handleResize);
});

export { innerWidth, breakpoints };
