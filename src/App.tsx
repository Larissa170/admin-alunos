import './App.css';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { AlunoCreate, AlunoEdit, AlunoList } from './alunos/alunos';

const dataProvider = jsonServerProvider('http://localhost:3001');

const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="alunos" list={AlunoList} edit={AlunoEdit} create={AlunoCreate}/>
</Admin>;

export default App;
