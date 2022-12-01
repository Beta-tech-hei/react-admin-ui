
import { List, Datagrid, TextField, SearchInput, EmailField,ShowButton, FilterForm, FilterButton,BooleanField,DateField, EditButton } from "react-admin";

import { Stack, Chip} from '@mui/material';
import { useTranslate } from "react-admin";

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};
const postFilters = [
    <SearchInput source="q" alwaysOn />,
    <QuickFilter source="status" label="Fee paid" defaultValue={'paid'} />,
    <QuickFilter source="status" label="Unpaid fee" defaultValue={'unpaid'} />,
    <QuickFilter source="status" label="Fee late" defaultValue={'late'} />
];

const ListToolbar = () => (
    <Stack direction="row" >
        <FilterForm filters={postFilters} />
        <FilterButton filters={postFilters}/>
    </Stack>
);


const FeeList = () => {
    return (<>
        <List >
            <ListToolbar />
                <Datagrid rowClick="edit">
                    <TextField source="id"/>
                    <TextField source="first_name" />
                    <TextField source="last_name" />
                    <EmailField source="email" />
                    <TextField source="status" />

                    <BooleanField source="paid" />


                    <DateField source='creation_datetime' label="Payment date"  />

                    <ShowButton />
                    <EditButton />
                </Datagrid>
        </List>
    </>);
}

export default FeeList;
