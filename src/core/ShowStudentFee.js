import {
    Show,
    SimpleShowLayout,
    TextField,
    EmailField,
    NumberField,
} from 'react-admin';
import { DateField } from 'react-admin';
import { Grid } from '@mui/material/'


export function ShowStudentFee(props) {
    return (
        <Show
            resource='fees'
        >            
            <Grid container spacing={3} margin="1em">
                <Grid item xs>
                    <SimpleShowLayout>
                        <TextField source='id' />
                        <TextField source="first_name" />
                    <TextField source="last_name" />
                        <EmailField source='email' />
                    </SimpleShowLayout>
                </Grid>
                <Grid item xs >
                <SimpleShowLayout>
                        <TextField source='comment' />
                        <TextField source='total_amount' />
                        <DateField source='creation_datetime' label="Payment date" />
                        <DateField source='due_datetime' />
                        <NumberField source='remaining_amount'/>
                        <TextField source='status' />
                    </SimpleShowLayout>
                </Grid>
            </Grid>

        </Show>


    )
}