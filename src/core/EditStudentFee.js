import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    SelectInput,
    DateInput
} from 'react-admin'

export function EditStudentFee() {
    return (
        <Edit resource='users'>
            <SimpleForm>
                <NumberInput source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
                <DateInput source='payment_date' />
                <SelectInput source="status" choices={[
    { id: 'paid', name: 'Paid' },
    { id: 'unpaid', name: 'Unpaid' },
    { id: 'late', name: 'Late' },
]} />
            </SimpleForm>
        </Edit>
    )
}