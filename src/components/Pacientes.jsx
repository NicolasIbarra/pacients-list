function Pacientes({ paciente, pacientes, setPacientes, setPacienteFormulario }) {
  //Destructuring de pacientes
  const {
    nombreMascota,
    nombrePropietario,
    emailPropietario,
    fechaAltaMascota,
    sintomasMascota,
    id
  } = paciente;

  const eliminarPaciente = id => {
    const respuesta = confirm(`¿Deseas eliminar a ${paciente.nombreMascota}?`)
    if(respuesta){
      const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id);
      setPacientes(pacientesActualizados);
    }
  }

  return (
    <div className="bg-white px-5 py-10 m-5 rounded-lg shadow-lg">
      <p className="text-lg text-gray-600 font-bold">
        Mascota: <span className="font-normal">{nombreMascota}</span>
      </p>

      <p className="text-lg text-gray-600 font-bold">
        Propietario: <span className="font-normal">{nombrePropietario}</span>
      </p>

      <p className="text-lg text-gray-600 font-bold">
        Email: <span className="font-normal">{emailPropietario}</span>
      </p>

      <p className="text-lg text-gray-600 font-bold">
        Fecha alta: <span className="font-normal">{fechaAltaMascota}</span>
      </p>

      <p className="text-lg text-gray-600 font-bold">
        Síntomas: <span className="font-normal">{sintomasMascota}</span>
      </p>

      <div className="flex justify-between">
        <button
          type="button"
          className="mt-8 py-2 px-10 rounded-lg uppercase 
                    text-sm text-white font-bold
                    bg-green-500 hover:bg-green-600"
          onClick={() => setPacienteFormulario(paciente)}
        >Editar</button>

        <button
          type="button"
          className="mt-8 py-2 px-10 rounded-lg uppercase 
                    text-sm text-white font-bold 
                    bg-red-500 hover:bg-red-600"
          onClick={() => eliminarPaciente(id)}
        >Eliminar</button>
      </div>
    </div>
  );
}

export default Pacientes;
