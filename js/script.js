// Hacer que se muestre la alerta cuando se completa el formulario

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("¡Gracias por contactar a la Alianza Rebelde! Nos pondremos en contacto contigo pronto.");
});
