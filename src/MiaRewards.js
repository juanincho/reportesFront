import { useState } from 'react';
import axios from 'axios';
import 'react-pivottable/pivottable.css';

function MiaRewards() {
    const numeroCliente = 783
//   const obtenerDatos = async () => {
//     if (selectedValue === "opcion2") {
//       await axios.post(`http://localhost:3001/reservasPrueba`, { values: valores, fechaInicio: fechaInicio, fechaFin: fechaFin, numSocio: numSocio })
//         .then(function (response) {
//           //console.log(response.data);
//           setData(response.data);
//           //console.log(data);
//           setPresionado(true);
//         })
//         .catch(function (error) {
//           if (error.status === 400) {
//             alert("Ingresa un rango de fechas valido");
//           }
//           console.log(error.status);

//           console.log(error);
//         })
//     }
//     else {
//       await axios.post(`http://localhost:3001/gastosFacPrueba`, { values: valores, fechaInicio: fechaInicio, fechaFin: fechaFin, numSocio: numSocio })
//         .then(function (response) {
//           //console.log(response.data);
//           setData(response.data);
//           //console.log(data);
//           setPresionado(true);
//         })
//         .catch(function (error) {
//           if (error.status === 400) {
//             alert("Ingresa un rango de fechas valido");
//           }
//           console.log(error.status);

//           console.log(error);
//         })
//     }

//   }

  return (
    <div className="App bg-gradient-to-r from-sky-900 to-sky-700 flex h-screen flex-row justify-center items-center p-5">
        <button className="w-full bg-gradient-to-r from-sky-400 to-sky-500 px-8 py-4 rounded-xl text-base md:text-lg font-semibold hover:from-sky-500 hover:to-sky-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] text-white">
            Consulta tus puntos
        </button>
        
    </div>
  );
}

export default MiaRewards;
