$(function() {
    // Validations & form submit 
    $('#vassForm').validate({
        rules: {
            name: {
                required: true,
                lettersonly: true
            },
            empresa: {
                required: true,
                lettersonly: true
            },
            email: {
                required: true,
                betterEmail: true,
            },
            tel: {
                required: true,
                number: true,
                maxlength: 10,
                minlength: 10,
                phoneStarting3: true
            },
            pais: { valueNotEquals: "default" },
            mensaje: {
                required: true,
                lettersonly: true
            },
          
           
            
        },
        messages: {
        
            name: {
                required: "Este campo es requerido.",
                lettersonly: "Esta permitido solo letras SIN espacio al final.",
            },
            empresa: {
                required: "Este campo es requerido.",
                lettersonly: "Esta permitido solo letras SIN espacio al final.",
            },
            email: {
                required: "Este campo es requerido.",
                betterEmail: "Ingresa un correo valido."
            },
            tel: {
                phoneStarting3: "El número debe comenzar con 3",
                required: "Este campo es requerido.",
                maxlength: "Máximo 10 números",
                minlength: "Mínimo 10 números",
            },
            pais: "Selecciona un país",
            mensaje: {
                required: "Este campo es requerido.",
            },
           
           
        },

    })
});
  // iniciar  con numero 3
  jQuery.validator.addMethod("phoneStarting3", function (phone_number, element) {
      return this.optional(element) || phone_number.match(/^3\d{9}$/);
  });
// Validacion nombre
  jQuery.validator.addMethod("lettersonly", function (value, element) {
      return this.optional(element) || /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/i.test(value);
  });
// numeros no iguales
  jQuery.validator.addMethod("notEqual", function(value, element, param) {
  return this.optional(element) || value != $(param).val();
  }, "El número de ser diferente que el de contacto.");
    // modal respuesta

  // validar selects
  $.validator.addMethod("valueNotEquals", function (value, element, arg) {
      return arg !== value;
  }, "elige una opcion.");

  // validar email
  $.validator.addMethod('betterEmail', function (value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, "Ingresa un correo valido.");