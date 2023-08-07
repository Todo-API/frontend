import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EditTodo from './EditTodo';
import ToggleStatus from './ToggleStatus';

const Tab = createMaterialTopTabNavigator();

function UpdateTodos() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="EditTodo" component={EditTodo} />
      <Tab.Screen name="ToggleStatus" component={ToggleStatus} />
    </Tab.Navigator>
  );
}

export default UpdateTodos