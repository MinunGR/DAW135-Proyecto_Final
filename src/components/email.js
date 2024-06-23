const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_h9gr8hr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      //alert('Mensaje enviado correctamente');
      Swal.fire({
        title: "Excelente!",
        text: "Información enviada con éxito",
        icon: "success"
      });
      form.reset();
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      //alert(JSON.stringify(err));
      Swal.fire({
        title: "Error",
        text: "La información no se pudo enviar",
        icon: "error"
      });
    });
});