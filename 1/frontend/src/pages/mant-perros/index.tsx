// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsBasic from 'src/views/form-layouts/FormLayoutsBasic'
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from 'src/views/form-layouts/FormLayoutsSeparator'
import FormLayoutsAlignment from 'src/views/form-layouts/FormLayoutsAlignment'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import Typography from '@mui/material/Typography'
import { Card, CardHeader, Link } from '@mui/material'
import TableDogs from 'src/views/tables/TableDogs'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Tabla de perros
          </Link>
        </Typography>
        <Typography variant='body2'>Lista de perros con detalles</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Basic Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableDogs />
        </Card>
      </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
