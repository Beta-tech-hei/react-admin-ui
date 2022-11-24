import { List, Datagrid, TextField, SearchInput, EmailField, CreateButton,FilterForm, BooleanField, FilterButton, ShowButton, DateField } from "react-admin";
import { Stack, Chip} from '@mui/material';
import { useTranslate } from "react-admin";

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};
const postFilters = [
    <SearchInput source="q" alwaysOn />,
    <QuickFilter source="statusOn" label="Fee paid" defaultValue={true} />,
    <QuickFilter source="statusOff" label="Unpaid fees" defaultValue={false} />,
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
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <BooleanField source="status" />
                    <DateField source='payment date'  />
                    <ShowButton />
                </Datagrid>
            <CreateButton />
        </List>
    </>);
}

export default FeeList;
