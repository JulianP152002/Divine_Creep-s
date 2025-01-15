const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};
function calback(entries) {
  console.log("llamando callback");
}

const observer = new IntersectionObserver(calback, options);
const img = document.querySelector("#element");
observer.observe(img);

img.addEventListener("click", () => {
  console.log("click");
});
