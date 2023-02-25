// este código chequea si el usuario ya visitó el sitio (por el visited guardado en el localStorage), en caso de que no lo haya visitado, muestra un pop-up utilizando sweetalert.
// este script funciona solamente en determinadas páginas del sitio.

if (!localStorage.getItem("visited")) {
    localStorage.setItem("visited", true);
    Swal.fire({
    title: '¡Hola! Te damos la bienvenida a Plan Control',
    text: "Parece que es la primera vez que utilizás la plataforma, ¿Sabés como utilizarla?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#60a51e',
    cancelButtonColor: '#29a3a3',
    background: '#fff',
    confirmButtonText: 'No sé utilizarla. Quiero ver el tutorial.',
    cancelButtonText: 'Ya sé utilizarla. Continuar a Plan Control.'
    }).then((result) => {
    if (result.isConfirmed) {
    window.open("../recursos/instructivo-plancontrol.pdf", "_blank"); //acá iría el link a un pdf con un tutorial que muestra como utilizar la plataforma.
    }
    });
    }


    // SCRIPT PARA GUARDAR EN EL LOCALSTORAGE INFO DEL DISPOSITIVO DEL USUARIO (con fines amigables)
    // Obtener la información del dispositivo
var deviceInfo = {
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    userAgent: navigator.userAgent
    };
    
  // Convertir la información del dispositivo a formato JSON
    var deviceInfoJson = JSON.stringify(deviceInfo);
    
  // Guardar la información del dispositivo en el localstorage
    localStorage.setItem("deviceInfo", deviceInfoJson);