//  const cameraBtn = document.getElementById("cameraBtn");
//     const camera = document.getElementById("camera");
//     const dress = document.getElementById("dress");

//     cameraBtn.addEventListener("click", () => {
//       navigator.mediaDevices.getUserMedia({ video: true })
//         .then(stream => {
//           camera.srcObject = stream;
//           camera.style.display = "block"; // show camera
//           dress.style.display = "block";  // show dress
//         })
//         .catch(err => {
//           console.error("Camera not working:", err);
//         });
//     });

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