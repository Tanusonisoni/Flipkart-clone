const userImageInput = document.getElementById('userImage');
const dressSelect = document.getElementById('dressSelect');
const tryOnBtn = document.getElementById('tryOnBtn');
const canvas = document.getElementById('tryOnCanvas');
const ctx = canvas.getContext('2d');

let userImg = new Image();
let dressImg = new Image();

// Handle Try On
tryOnBtn.addEventListener('click', () => {
  const file = userImageInput.files[0];
  if (!file) {
    alert('Please upload your photo first!');
    return;
  }

  // Load user image
  const reader = new FileReader();
  reader.onload = function(e) {
    userImg.src = e.target.result;
  };
  reader.readAsDataURL(file);

  // Load dress image
  dressImg.src = dressSelect.value;
});

// Draw images on canvas when user image loads
userImg.onload = () => {
  canvas.width = userImg.width;
  canvas.height = userImg.height;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(userImg, 0, 0);

  // Draw dress overlay
  dressImg.onload = () => {
    // Adjust position and size of dress as needed
    ctx.drawImage(dressImg, 50, 100, 200, 300);
  };
};
