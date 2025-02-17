import { useState } from 'react';
import axios from 'axios';
import 'react-pivottable/pivottable.css';
import Tabla from './components/tabla';

function MiaRewards() {
    const [data, setData] = useState({});
    const [presionado, setPresionado] = useState(false);
    const [fechaFin, setFechaFin] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [numSocio, setNumSocio] = useState("");
    const headers = ["Fecha de Reserva", "Nombre del Viajero", "Codigo de Reservacion", "Destino", "Hotel", "Monto Total", "Check Out", "Puntos Disponibles", "Pendientes por asignar"];
    const obtenerPuntos = async () => {
        await axios.post(`http://localhost:3001/obtenerPuntosMia`, { fechaInicio: fechaInicio, fechaFin: fechaFin, numSocio: numSocio })
            .then(function (response) {
                console.log(response.data);
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300">
            <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white text-center">Reporte de puntos de Mia Rewards</h2>
                {/*<p>Fecha de inicio</p>
                <input type='date' className="p-1 block w-2/12 rounded-lg shadow-sm transition-all duration-200 border-gray-300 focus:ring-blue-500 focus:border-blue-500"/>*/}
                {presionado &&
                    <>
                        {data.length > 1 ? <><p className="text-xl font-semibold text-white mb-2">Periodo del reporte {data[data.length - 1].Fecha_de_reserva} a {data[0].Fecha_de_reserva}</p>
                            <p className="text-xl font-semibold text-white">Puntos totales generados: {data.reduce((suma, objeto) => {
                                return suma + objeto.puntos_disponibles + objeto.puntos_pendientes;
                            }, 0)}</p>
                            <p className="text-xl font-semibold text-white">Puntos totales asignados:  {data.reduce((acumulador, objeto) => {
                                return acumulador + objeto.puntos_disponibles;
                            }, 0)}</p>
                            <p className="text-xl font-semibold text-white">Puntos pendientes por asignar:  {data.reduce((acumulador, objeto) => {
                                return acumulador + objeto.puntos_pendientes;
                            }, 0)}</p></> : <></>}
                        <div className='overflow-y-auto rounded backdrop-blur-sm w-full'>
                            <Tabla arrHeaders={headers} data={data} valores={["Fecha_de_reserva", "NombreViajero", "codigo_reservacion_host", "destino", "host", "total_impuestos", "check_out", "puntos_disponibles", "puntos_pendientes"]} />
                        </div></>}
                <div className='flex flex-row w-full gap-6 items-center justify-center flex-wrap mt-6'>
                    <div className='w-40'>
                        <p className='text-white'>Fecha de inicio</p>
                        <input type='date' className="p-1 block w-full rounded-lg shadow-sm transition-all duration-200 border-gray-300 focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setFechaInicio(e.target.value)} value={fechaInicio} />
                    </div>
                    <div className='w-40'>
                        <p className='text-white'>Fecha de fin</p>
                        <input type='date' className="p-1 block w-full rounded-lg shadow-sm transition-all duration-200 border-gray-300 focus:ring-blue-500 focus:border-blue-500" onChange={(x) => setFechaFin(x.target.value)} value={fechaFin} />
                    </div>
                    <div className='w-40'>
                        <p className='text-white'>Numero de socio</p>
                        <input type='text' className="p-1 block w-full rounded-lg shadow-sm transition-all duration-200 border-gray-300 focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setNumSocio(e.target.value)} value={numSocio} placeholder='Numero de socio' />
                    </div>
                </div>
                <button className="flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors mt-5" onClick={obtenerPuntos}>
                    Consulta tus puntos
                </button>
            </div>


        </div>
    );
}

export default MiaRewards;
