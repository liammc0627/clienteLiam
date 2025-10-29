const email = document.getElementById('email');
const password = document.getElementById('password');
const eError = document.getElementById('e-error');
const pError = document.getElementById('p-error');
const formulario = document.getElementById('formulario');

function validarEmail(valor) {
  return valor.includes('@');
}

function validarPassword(valor) {
  return valor.length >= 8 && valor.length <= 10;
}

email.addEventListener('blur', function() {
  if (!validarEmail(email.value)) {
    eError.textContent = 'el email tiene que tener @';
  }
});

password.addEventListener('blur', function() {
  if (!validarPassword(password.value)) {
    pError.textContent = 'la contraseña tiene que tener entre 8 y 10 caracteres';
  }
});

email.addEventListener('focus', function() {
  eError.textContent = '';
});

password.addEventListener('focus', function() {
  pError.textContent = '';
});

formulario.addEventListener('submit', function(e) {
  if (!validarEmail(email.value) || !validarPassword(password.value)) {
    alert('corrige los errores');
  } else {
    alert('enviado');
  }
});