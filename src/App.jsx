import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const estadoInicialPacientes = JSON.parse(localStorage.getItem("Pacientes")) ?? [];
  const [pacientes, setPacientes] = useState(estadoInicialPacientes);
  const [pacienteFormulario, setPacienteFormulario] = useState({});

  useEffect(() => {
    localStorage.setItem("Pacientes", JSON.stringify(pacientes));
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          pacienteFormulario={pacienteFormulario}
          setPacienteFormulario={setPacienteFormulario}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPacienteFormulario={setPacienteFormulario}
        />
      </div>
    </div>
  );
}

export default App;
