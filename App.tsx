/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MyTodos from './src/components/MyTodos';
import EditTodo from './src/components/EditTodo';
import AddTodo from './src/components/AddTodo';
import RemoveTodo from './src/components/RemoveTodo';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="MyTodos" component={MyTodos} />
      <Tab.Screen name="EditTodo" component={EditTodo} />
      <Tab.Screen name="AddTodo" component={AddTodo} />
      <Tab.Screen name="RemoveTodo" component={RemoveTodo} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App