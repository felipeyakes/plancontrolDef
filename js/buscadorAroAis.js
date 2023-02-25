const getDatos = async () => {
    const resp = await fetch('../js/aroAis.json')
    .then((res) => res.json())
    .then((data) => {
        return data
    })
    return resp
}
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultados')

const mostrarResultados = (oficinas) => {
  resultado.innerHTML = '';
  let contador = 0;

  if (formulario.value.trim().length < 3) {
    resultado.innerHTML = `<p class="no-resultAroAis">Debés escribir como mínimo 3 caracteres para iniciar la búsqueda.</p>`;
  } else {
    const texto = formulario.value.toLowerCase();
    for (let aroAisOffice of oficinas) {
    let aroAisOff = aroAisOffice.aroAisOff.toLowerCase();
    if (aroAisOff.indexOf(texto) !== -1) {
        contador++;
        resultado.innerHTML += `<li>${aroAisOffice.aroAisOff}</li>`
        resultado.innerHTML += `<p class="tel-aroAis">Teléfono: ${aroAisOffice.aroAisTelNumber}</p>`
        resultado.innerHTML += `<p class="email-aroAis">Email: ${aroAisOffice.aroAisEmail}</p>`
        resultado.innerHTML += `<p class="info-aroAis">Información: ${aroAisOffice.aroAisInfo}</p>`
    }
    }

    if (contador === 0 && formulario.value.length >= 3) {
    resultado.innerHTML = `<p class="no-resultAroAis">No se encontraron oficinas ARO/AIS.</p>`;
    }
  }
}

const buscarOficinas = async () => {
  const oficinas = await getDatos();
  mostrarResultados(oficinas);
}

formulario.addEventListener('input', () => {
  buscarOficinas();
});

// llamada inicial para cargar todas las oficinas
buscarOficinas();
