import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const AlunoList = (data) => (
  <List>
    <Datagrid data={data.data} rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="idade" />
    </Datagrid>
  </List>
);
export const AlunoEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="idade" />
    </SimpleForm>
  </Edit>
);
export const AlunoCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="idade" />
    </SimpleForm>
  </Create>
);
