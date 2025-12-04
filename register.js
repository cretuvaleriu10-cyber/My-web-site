function register() {
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;

  // Salvăm în localStorage (doar pentru testare, nu e sigur!)
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Cont creat cu succes!");
  window.location.href = "login.html"; // Redirecționează spre login
  return false;
}