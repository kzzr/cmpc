import { useEffect, useState } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

interface DogData {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const TableDogs = () => {
  const [rows, setRows] = useState<DogData[]>([]);

  useEffect(() => {
    // Aquí debes hacer tu solicitud a la API y actualizar las filas con los datos obtenidos
    // Por ejemplo, utilizando fetch
    fetch('http://localhost:3000/perros')
      .then(response => response.json())
      .then(data => setRows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    
    <TableContainer component={Paper}>
      <Box
        sx={{
          position: 'relative', // Hace que el contenedor sea de posición relativa para que el botón se posicione correctamente
          marginBottom: 2, // Espacio entre el botón y la tabla
        }}
      >
        <Button
          type='submit'
          variant='contained'
          size='large'
          sx={{
            position: 'absolute',
            top: 0,
            right: 15,
          }}
        >
          Agregar Perro
        </Button>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            
            <TableCell>Nombre</TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell>Tamaño</TableCell>
            <TableCell>Peso</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Temperamento</TableCell>
            <TableCell>Energia</TableCell>
            <TableCell>Cuidado</TableCell>
            <TableCell>Imagen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            
            <TableRow
              key={row.name}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell>{row.nombre}</TableCell>
              <TableCell>{row.descripcion}</TableCell>
              <TableCell>{row.tamano}</TableCell>
              <TableCell>{row.peso}</TableCell>
              <TableCell>{row.color}</TableCell>
              <TableCell>{row.temperamento}</TableCell>
              <TableCell>{row.energia}</TableCell>
              <TableCell>{row.cuidado}</TableCell>
              <TableCell>{row.imagen}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDogs;