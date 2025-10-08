const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const userInput = document.getElementById('userImage');
const dressSelect = document.getElementById('dressSelect');
const btn = document.getElementById('apply');

let userImg = new Image();
let dressImg = new Image();

userInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    userImg.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

btn.addEventListener('click', () => {
  dressImg.src = dressSelect.value;
  // Once user and dress are loaded
  userImg.onload = drawTransition;
  dressImg.onload = drawTransition;
});

function drawTransition() {
  // draw user first
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(userImg, 0, 0, canvas.width, canvas.height);

  // animate fade in
  let alpha = 0;
  const target = 1.0;
  const dressX = 50, dressY = 100, dressW = 200, dressH = 300;

  function fadeStep() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0;
    ctx.drawImage(userImg, 0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = alpha;
    ctx.drawImage(dressImg, dressX, dressY, dressW, dressH);

    ctx.globalAlpha = 1.0; // reset

    alpha += 0.05;
    if (alpha < target) {
      requestAnimationFrame(fadeStep);
    }
  }

  fadeStep();
}
