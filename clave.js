var intentos = 3;

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'invitado' && password === '123456') {
    sessionStorage.setItem('username', username);
    document.getElementById('message').textContent = '¡Bienvenido!';
    window.location.href = 'index.html'; 
  } else {
    intentos--; 
    if (intentos > 0) {
      document.getElementById('message').textContent = `Credenciales inválidas. Te quedan ${intentos} intentos.`;
    } else {
      document.getElementById('message').textContent = '¡Has excedido el número de intentos permitidos!';
      document.getElementById('username').disabled = true;
      document.getElementById('password').disabled = true;
      document.querySelector('button[type="submit"]').disabled = true;
    }
  }
});

function loginAsGuest() {
  sessionStorage.setItem('username', 'invitado');
  window.location.href = 'index.html';
}
