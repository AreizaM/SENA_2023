// getElementById es una palabra reservada, además de conseguir el ID desde el HTML

// Obtener referencias a los elementos del formulario
const getForm = document.getElementById('login');
const getEmail = document.getElementById('email');
const getPassword = document.getElementById('password');
const getInfoButton = document.getElementById('button');

//Recoger información con addEventListener
getInfoButton.addEventListener('click', function(event){
    event.preventDefault(); //Evitar que se envie automaticamente los registros en el formulario

    // Realizar las validaciones
    if(!checkEmail(getEmail.value)){
        showError(getEmail, 'Por favor ingrese un correo válido.');
    }else if(getPassword.value === ''){
        showError(getPassword, 'Por favor ingrese una contraseña válida.');
    }else{
        getForm.submit();
    }
});

// Función para validar el formato del correo electónico

function checkEmail(email){
    // Utilizar una expresión regular para verificar si el correo tiene un formato valido
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
    return emailRegex.test(email);
}

function showError(input, message){
    // Enseñar un mensaje de emergencia en pantalla con una etiqueta <p></p>
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;

    const containerInput = input.parentElement;
    containerInput.appendChild(errorMessage);

    //Agregar una clase de estilo al mensaje de error
    containerInput.classList.add('error');
}

function removeError(){
    const containerInput = this.parentElement;
    const errorMessage = containerInput.querySelector('.error-message');

    if(errorMessage){
        containerInput.removeChild(errorMessage);
        containerInput.classList.remove('error');
    }
}

// getEmail.addEventListener('input', removeError);
// getPassword.addEventListener('input', removeError);