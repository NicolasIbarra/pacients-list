import Pacientes from "./Pacientes";

function ListadoPacientes({ pacientes, setPacientes, setPacienteFormulario }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {pacientes.length > 0 ? (
        <div>
          <h2 className="font-bold text-3xl text-center">Seguimiento</h2>

          <p className="mt-5 text-lg text-center mb-5">
            Cuida a tus pacientes.
          </p>

          <div className="md:overflow-y-scroll h-screen">
            {pacientes.map((paciente) => (
              <Pacientes 
                key={paciente.id} 
                paciente={paciente}
                pacientes={pacientes}
                setPacientes={setPacientes}
                setPacienteFormulario={setPacienteFormulario}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-bold text-3xl text-center">No hay pacientes</h2>

          <p className="mt-5 text-lg text-center mb-5">
            Añádelos y controla su evolución.
          </p>
        </div>
      )}
    </div>
  );
}

export default ListadoPacientes;
