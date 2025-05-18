import flags from "./model/flags.js";

const main = document.querySelector("main");

flags.forEach((flag) => {
  main.insertAdjacentHTML(
    "beforeend",
    `
    <div class="flag col-2 my-4 text-center p-3">
      <img src="${flag.image}" alt="${flag.name}" class="img-fluid mb-3 fade-in">
      <p>${flag.name}</p>
    </div>
  `
  );
});
