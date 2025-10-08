function showForm(formId){
    document.querySelectorAll(".form-box").forEach(form=>form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = this.email.value;
  const password = this.password.value;
  
  // just simulate success
  if(email && password){
    alert('Login successful!');
    // or redirect user:
    // window.location.href = "home.html";
  } else {
    alert('Please fill all fields');
  }
});