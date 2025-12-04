function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "valeriu" && p === "cubemedia") {
    alert("Conectare reușită!");
    window.location.href = "index.html"; // redirecționează spre pagina principală
  } else {
    alert("Date incorecte!");
  }
  return false;
}

function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (u === savedUser && p === savedPass) {
    alert("Conectare reușită!");
    window.location.href = "index.html";
  } else {
    alert("Date incorecte!");
  }
  return false;
}