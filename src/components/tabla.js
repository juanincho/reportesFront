import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const paginationModel = { page: 0, pageSize: 5 };



function Tabla({ arrHeaders, data, valores }) {
    const dataConId = data.map((row, index) => ({
        ...row,
        id: index,  // Usa 'id' si existe, si no, usa el índice
    }));
    const columns = valores.map((field, index) => ({
        field: field,  
        headerName: arrHeaders[index] || field,  // Usa el headerName o el field si falta
        flex: 1
    }));    
    return (
        <>
            <Paper sx={{ height: "auto", width: '100%', color: "black" }}>
                <DataGrid
                    rows={dataConId}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    )
}

export default Tabla;