import {
    Show,
    SimpleShowLayout,
    TextField,
    EmailField,
} from 'react-admin';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BooleanField, DateField } from 'react-admin';


import { Grid } from '@mui/material/'


export function ShowStudentFee(props) {
    return (
        <Show
            resource='users'
        >
            <Grid container spacing={3} margin="1em">
                <Grid item xs={3} >
                    <SimpleShowLayout>

                        <TextField source='id' />
                        <TextField source='name' />
                        <EmailField source='email' />
                    </SimpleShowLayout>
                </Grid>
                <Grid item xs={8} >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Months</TableCell>
                                    <TableCell  >1</TableCell>
                                    <TableCell  >2</TableCell>
                                    <TableCell  >3</TableCell>
                                    <TableCell  >4</TableCell>
                                    <TableCell  >5</TableCell>
                                    <TableCell  >6</TableCell>
                                    <TableCell  >7</TableCell>
                                    <TableCell  >8</TableCell>
                                    <TableCell  >9</TableCell>
                                    <TableCell  >10</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell  >Payment status</TableCell>
                                    <TableCell>
                                        <BooleanField source="status" />
                                    </TableCell>
                                    <TableCell  >x</TableCell>
                                    <TableCell  >r</TableCell>
                                    <TableCell  >r</TableCell>
                                    <TableCell  >r</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        Payment date
                                    </TableCell>
                                    <TableCell>
                                        <DateField source="publication_date" />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

        </Show>


    )
}