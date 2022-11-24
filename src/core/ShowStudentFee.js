import {
    Show,
    SimpleShowLayout,
    TextField,
    EmailField,
    NumberField,
} from 'react-admin';
import { BooleanField, DateField } from 'react-admin';
import { Grid } from '@mui/material/'


export function ShowStudentFee(props) {
    return (
        <Show
            resource='users'
        >            
            <Grid container spacing={3} margin="1em">
                <Grid item xs>
                    <SimpleShowLayout>
                        <TextField source='id' />
                        <TextField source='name' />
                        <EmailField source='email' />
                    </SimpleShowLayout>
                </Grid>
                <Grid item xs >
                <SimpleShowLayout>
                        <TextField source='comment' />
                        <TextField source='total_amount' />
                        <DateField source='payment_date' />
                        <DateField source='due_datetime' />
                        <NumberField source='remaining_amount'/>
                        <TextField source='status' />
                    </SimpleShowLayout>
                </Grid>
            </Grid>

        </Show>


    )
}