import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { authProvider } from './component/authProvider';
import FeeList from './core/FeeList';
import { ShowStudentFee } from './core/ShowStudentFee';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name="posts" list={ListGuesser} />
    <Resource name='users' list={FeeList} show={ShowStudentFee} />
  </Admin>
);

export default App;