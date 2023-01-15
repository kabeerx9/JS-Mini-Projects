const topLeft = document.querySelector(".top-left-panel");
const topRight = document.querySelector(".top-right-panel");
const bottomLeft = document.querySelector(".bottom-left-panel");
const bottomRight = document.querySelector(".bottom-right-panel");

const getRandomPanel = () => {
  const panels = [topLeft, topRight, bottomLeft, bottomRight];

  return panels[parseInt(Math.random() * panels.length)];
};

const sequence = [getRandomPanel()];
let sequenceToGuess = [...sequence];

// using promise because we need asynchronous work here, so we need it to stop
// and do our work and then move ahead.

const flash = (panel) => {
  return new Promise((resolve, reject) => {
    panel.classList.toggle("active");

    setTimeout(() => {
      panel.classList.toggle("active");
      const sound = new Audio("sounds/blue.mp3");
      sound.play();
      // agar same panel 2 baar ho to unke beech me time gap
      setTimeout(() => {
        resolve();
      }, 250);
    }, 1000);
  });
};

let canClick = false;

const panelClicked = (panelClicked) => {
  if (!canClick) return;
  console.log(panelClicked);
  const expectedPanel = sequenceToGuess.shift();
  if (expectedPanel === panelClicked) {
    if (sequenceToGuess.length === 0) {
      // start new round
      sequence.push(getRandomPanel());
      sequenceToGuess = [...sequence];
      main();
    }
  } else {
    // end game
    const sound = new Audio("sounds/wrong.mp3");
    sound.play();
    alert("game over");
  }
};

// async function so that we can use await
const main = async () => {
  for (let panel of sequence) {
    // if we don't await it will just flash them all at the same time.
    await flash(panel);
  }
  canClick = true;
};
main();
