import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ViewTodos from './ViewTodos';
import FindTodo from './FindTodo';

const Tab = createMaterialTopTabNavigator();

function GetTodo() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ViewTodos" component={ViewTodos} />
      <Tab.Screen name="FindTodo" component={FindTodo} />
    </Tab.Navigator>
  );
}

export default GetTodo