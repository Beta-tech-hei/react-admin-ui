import { List, Datagrid, TextField, EmailField, TextInput, CreateButton, FilterButton, FilterForm, ListBase, SimpleList } from "react-admin";
import { Stack, useMediaQuery } from '@mui/material';

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput source="name" />,
];

const ListToolbar = () => (
    <Stack direction="row" >
        <FilterForm filters={postFilters} />
    </Stack>
);


const FeeList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down("sm"));
    return (<>
        <List>
            <ListToolbar />
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => record.email}
                    tertiaryText={record => record.name}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                </Datagrid>
            )}
            <CreateButton />
        </List>
    </>);
}

export default FeeList;