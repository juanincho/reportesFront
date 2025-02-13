import './App.css';
//import {PivotViewComponent} from '@syncfusion/ej2-react-pivotview'
import { useState } from 'react';
import axios from 'axios';
import PivotTableUI from "react-pivottable/PivotTableUI";
import 'react-pivottable/pivottable.css';
import TableRenderers from "react-pivottable/TableRenderers";
import RadioButton from './components/radioButton';
import Tabla from './components/tabla';
import PivotTable from './components/pivotTable';

function App() {
  const [presionado, setPresionado] = useState(false);
  const [data, setData] = useState({});
  const [pivotState, setPivotState] = useState({});
  const [headers, setHeaders] = useState([]);
  const [valores, setValores] = useState([]);
  const [fechaFin, setFechaFin] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [numSocio, setNumSocio] = useState("");

  const [
    selectedValue,
    setSelectedValue,
  ] = useState("opcion1");


  const obtenerDatos = async () => {
    let valores = [];
    let headersArray = [];
    console.log(fechaFin);
    console.log(fechaInicio);
    if (selectedValue === "opcion1") {
      valores = ["fecha", "tipo_de_solicitud", "estado", "accion_tomada"];
      headersArray = ["Fecha", "Tipo de Solicitud", "Estado", "Acción tomada"];
    } else if (selectedValue === "opcion2") {
      valores = ["creado_el", "host", "total_impuestos", "estatus"];
      headersArray = ["Fecha", "Hotel", "Costo", "Estado"];
    } else if (selectedValue === "opcion3") {
      valores = ["fecha", "concepto", "monto_sin_impuestos", "monto_con_impuestos", "numero_factura", "estado"];
      headersArray = ["Fecha", "Concepto", "Monto Sin Impuestos", "Monto Con Impuestos", "Numero de Factura", "Estado"];
    }

    setHeaders(headersArray);
    setValores(valores);
    if (selectedValue === "opcion2") {
      await axios.post(`http://localhost:3001/reservasPrueba`, { values: valores, fechaInicio: fechaInicio, fechaFin: fechaFin, numSocio: numSocio })
        .then(function (response) {
          //console.log(response.data);
          setData(response.data);
          //console.log(data);
          setPresionado(true);
        })
        .catch(function (error) {
          if (error.status === 400) {
            alert("Ingresa un rango de fechas valido");
          }
          console.log(error.status);

          console.log(error);
        })
    }
    else {
      await axios.post(`http://localhost:3001/gastosFacPrueba`, { values: valores, fechaInicio: fechaInicio, fechaFin: fechaFin, numSocio: numSocio })
        .then(function (response) {
          //console.log(response.data);
          setData(response.data);
          //console.log(data);
          setPresionado(true);
        })
        .catch(function (error) {
          if (error.status === 400) {
            alert("Ingresa un rango de fechas valido");
          }
          console.log(error.status);

          console.log(error);
        })
    }

  }

  return (
    <div className="App bg-sky-500 flex h-full flex-row justify-center items-center">
      <div className='w-3/12 bg-gray-50 h-screen space-y-7 p-4 overflow-y-auto'>

        <h1 class="text-2xl md:text-3xl font-bold text-center mb-5 text-sky-900">
          Selecciona el reporte que quieres consultar
        </h1>

        <div>
          <RadioButton opcion={"opcion1"} label={"Reporte de Actividades y Acciones Realizadas"} setSelectedValue={setSelectedValue} selectedValue={selectedValue} />
          <RadioButton opcion={"opcion2"} label={"Reporte de Gastos y Reservaciones"} setSelectedValue={setSelectedValue} selectedValue={selectedValue} />
          <RadioButton opcion={"opcion3"} label={"Reporte de Créditos y Facturación"} setSelectedValue={setSelectedValue} selectedValue={selectedValue} />
        </div>

        <p className="text-base text-gray-700 leading-relaxed">Ingresa numero de socio en especifico</p>
        <input type='text' placeholder='Numero de socio en especifico' className='rounded bg-sky-100 w-4/6' onChange={(e) => setNumSocio(e.target.value)} value={numSocio}></input>
        <p className="text-base text-gray-700 leading-relaxed">Especifica fecha de inicio</p>
        <input className='rounded bg-sky-100 w-4/6' type='date' onChange={(e) => setFechaInicio(e.target.value)} value={fechaInicio}></input>

        <p className="text-base text-gray-700 leading-relaxed">Especifica fecha de fin</p>
        <input className='rounded bg-sky-100 w-4/6' type='date' onChange={(x) => setFechaFin(x.target.value)} value={fechaFin}></input>
        <button className='bg-sky-500 px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-sky-600 transition-colors shadow-lg hover:scale-105 transform duration-200 text-white' onClick={obtenerDatos}>Obtener datos actualizados</button>
      </div>
      <div className='w-9/12 flex flex-col justify-center items-center bg-gradient-to-r from-sky-900 to-sky-700 h-screen overflow-y-scroll text-white'>
        {presionado && (
          <div className='w-full flex flex-col overflow-y-auto h-full p-4'>
            {/* <h2>Tabla</h2>
            <div className='overflow-y-scroll h-96 rounded backdrop-blur-sm'>
              <Tabla arrHeaders={headers} data={data} valores={valores}/>
            </div> */}
            <h2>Pivot table</h2>
            <div className='h-screen backdrop-blur-sm'>
              {/* <PivotTableUI
                data={data}
                onChange={setPivotState}
                renderers={{ ...TableRenderers }}
                {...pivotState}
                unusedOrientationCutoff={Infinity} // Muestra todos los atributos
              /> */}
              <PivotTable arrHeaders={headers} data={data} valores={valores} ></PivotTable>
            </div>
          </div>)}
      </div>
    </div>
  );
}

export default App;
