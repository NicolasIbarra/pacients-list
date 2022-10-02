import { useState, useEffect } from "react";
import Error from "./Error.jsx";

function Formulario(props) {
  
  //Variables de formulario
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [emailPropietario, setEmailPropietario] = useState("");
  const [fechaAltaMascota, setFechaAltaMascota] = useState("");
  const [sintomasMascota, setSintomasMascota] = useState("");

  //Variables de error
  const [hayCamposVacios, setHayCamposVacios] = useState(false);

  //Destructuring de props
  const { pacientes, setPacientes, pacienteFormulario, setPacienteFormulario } = props;

  useEffect(() => {
    console.log("cambié a", hayCamposVacios);
  }, [hayCamposVacios])

  useEffect(() => {
    if(JSON.stringify(pacienteFormulario) !== "{}"){
      setNombreMascota(pacienteFormulario.nombreMascota);
      setNombrePropietario(pacienteFormulario.nombrePropietario);
      setEmailPropietario(pacienteFormulario.emailPropietario);
      setFechaAltaMascota(pacienteFormulario.fechaAltaMascota);
      setSintomasMascota(pacienteFormulario.sintomasMascota);
    }
  }, [pacienteFormulario])  

  /**
   * Genera un id por medio de una fecha y un número random.
   * @returns numeroRandom + fecha
   */
  const generarId = () => {
    const numeroRandom = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return numeroRandom + fecha;
  }

  /**
   * Valida que los campos del formulario no estén vacíos.
   * @returns void
   */
  const validarFormulario = () => {
    if (
      [
        nombreMascota,
        nombrePropietario,
        emailPropietario,
        fechaAltaMascota,
        sintomasMascota,
      ].includes("")
    ) {
      console.log("entre al true")
      console.log(hayCamposVacios)
      setHayCamposVacios(true);
      console.log(hayCamposVacios)
      return;
    }
    console.log("entre al false")
    setHayCamposVacios(false);
  };

  /**
   * Edita pacientes existentes.
   * @param {*} pacienteCargado 
   */
  const editarPaciente = (pacienteCargado) => {
    pacienteCargado.id = pacienteFormulario.id;
    const pacientesActualizados = pacientes.map((pacienteState => 
        pacienteState.id === pacienteFormulario.id ? pacienteCargado : pacienteState
      ))
    setPacientes(pacientesActualizados);
    setPacienteFormulario({});
  }

  /**
   * Agrega pacientes nuevos.
   * @param {*} pacienteCargado 
   */
  const agregarPaciente = (pacienteCargado) => {
    pacienteCargado.id = generarId();
    setPacientes([...pacientes, pacienteCargado]);
  }

  /**
   * Edita pacientes existentes o agrega pacientes nuevos.
   */
  const actualizarPacientes = () => {
    const pacienteCargado = {
      nombreMascota,
      nombrePropietario,
      emailPropietario,
      fechaAltaMascota,
      sintomasMascota,
    };

    if(pacienteFormulario.id){ 
      editarPaciente(pacienteCargado);
    } else { 
      agregarPaciente(pacienteCargado);
    }
  };

  /**
   * Vacía los campos del formulario.
   */
  const limpiarFormulario = () => {
    setNombreMascota("");
    setNombrePropietario("");
    setEmailPropietario("");
    setFechaAltaMascota("");
    setSintomasMascota("");
  };

  /**
   * Submit de formulario.
   * @param {*} e Evento
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    validarFormulario();
    console.log(hayCamposVacios)
    if(hayCamposVacios === false){
      actualizarPacientes();
      limpiarFormulario();
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-bold text-3xl text-center">Registro</h2>

      <p className="mt-5 text-lg text-center mb-5">
        Añade tus pacientes y adminístralos.
      </p>

      <form
        className="bg-white shadow-lg rounded-lg py-8 px-6 mb-10"
        onSubmit={handleSubmit}
      >
        {hayCamposVacios && <Error message={"❌ Todos los campos son obligatorios"}/>}

        <div className="mb-5">
          <label
            htmlFor="inpNombreMascota"
            className="block font-bold text-gray-600 text-lg"
          >
            Nombre Mascota
          </label>
          <input
            id="inpNombreMascota"
            type="text"
            placeholder="¿Cómo se llama tu mascota?"
            className="w-full rounded-sm border-2 p-2 mt-1"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="inpNombrePropietario"
            className="block font-bold text-gray-600 text-lg"
          >
            Nombre Propietario
          </label>
          <input
            id="inpNombrePropietario"
            type="text"
            placeholder="¿Cómo es tu nombre?"
            className="w-full rounded-sm border-2 p-2 mt-1"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="inpEmailPropietario"
            className="block font-bold text-gray-600 text-lg"
          >
            Email
          </label>
          <input
            id="inpEmailPropietario"
            type="email"
            placeholder="¿Cuál es tu email de contacto?"
            className="w-full rounded-sm border-2 p-2 mt-1"
            value={emailPropietario}
            onChange={(e) => setEmailPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="inpAltaMascota"
            className="block font-bold text-gray-600 text-lg"
          >
            Fecha Alta
          </label>
          <input
            id="inpAltaMascota"
            type="date"
            className="w-full rounded-sm border-2 p-2 mt-1"
            value={fechaAltaMascota}
            onChange={(e) => setFechaAltaMascota(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="inpSintomasMascota"
            className="block font-bold text-gray-600 text-lg"
          >
            Síntomas
          </label>
          <textarea
            id="inpSintomasMascota"
            placeholder="¿Qué síntomas presenta tu mascota?"
            className="w-full rounded-sm border-2 p-2 mt-1"
            value={sintomasMascota}
            onChange={(e) => setSintomasMascota(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="w-full bg-green-500 p-3 text-white font-bold uppercase hover:bg-green-600 
                    transition-all cursor-pointer mt-1 rounded-lg"
          value={pacienteFormulario.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
}

export default Formulario;
