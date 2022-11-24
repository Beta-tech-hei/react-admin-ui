import { List, Datagrid, TextField, SearchInput, EmailField, TextInput, CreateButton,FilterForm, SimpleList, BooleanField, FilterButton } from "react-admin";
import { Stack, useMediaQuery ,Chip} from '@mui/material';
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
                </Datagrid>
            <CreateButton />
        </List>
    </>);
}

export default FeeList;
