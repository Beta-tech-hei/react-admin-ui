import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import {authProvider} from "./provider/authProvider";
import {dataProvider} from "./provider/FakeProvider";


import FeeList from './core/FeeList';
import { ShowStudentFee } from './core/ShowStudentFee';
import { EditStudentFee } from './core/EditStudentFee';
import { MyMenu } from './component/MyMenu';


const App = () => {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} menu={MyMenu}>
      <Resource name="users" list={ListGuesser} />
      <Resource name='fees' list={FeeList} show={ShowStudentFee} edit={EditStudentFee} />

    </Admin>
  );
};



export default App;