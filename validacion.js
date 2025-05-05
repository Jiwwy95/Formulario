function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const genero = document.getElementById('genero').value;
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const mensaje = document.getElementById('mensaje');
  
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    const telefonoValido = /^[0-9]{10}$/.test(telefono); // 10 dígitos
  
    if (!nombre || !edad || !genero || !correo || !telefono || !direccion) {
      mensaje.textContent = 'Todos los campos son obligatorios.';
      mensaje.style.color = 'red';
      return;
    }
  
    if (!correoValido) {
      mensaje.textContent = 'El formato del correo es inválido.';
      mensaje.style.color = 'red';
      return;
    }
  
    if (!telefonoValido) {
      mensaje.textContent = 'El número de teléfono debe tener 10 dígitos.';
      mensaje.style.color = 'red';
      return;
    }
  
    mensaje.textContent = 'Formulario enviado exitosamente.';
    mensaje.style.color = 'green';
  }
  