const topLeft = document.querySelector(".top-left-panel");
const topRight = document.querySelector(".top-right-panel");
const bottomLeft = document.querySelector(".bottom-left-panel");
const bottomRight = document.querySelector(".bottom-right-panel");

const sequence = [topLeft, bottomRight, bottomLeft, topRight];

// using promise because we need asynchronous work here, so we need it to stop
// and do our work and then move ahead.
const flash = (panel) => {
  return new Promise((resolve, reject) => {
    // panel.classList.add("active");
    panel.className += "active";
    setTimeout(() => {
      panel.className = panel.className.replace("active", "");
      resolve();
    }, 1000);
  });
};

// async function that self executes
const main = async () => {
  for (let panel of sequence) {
    // if we don't await it will just flash them all at the same time.
    await flash(panel);
  }
};
main();
