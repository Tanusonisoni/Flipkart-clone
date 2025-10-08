
const cameraIcon = document.getElementById("cameraIcon");
  const camera = document.getElementById("camera");

  cameraIcon.addEventListener("click", () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        camera.srcObject = stream;
        camera.style.display = "block"; 
      })
      .catch(err => {
        console.error("Camera not working:", err);
      });
  });
 
