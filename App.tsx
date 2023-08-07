import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import GetTodo from './src/components/MyTodos/GetTodos';
import UpdateTodos from './src/components/UpdateTodos/UpdateTodos';
import AddTodo from './src/components/AddTodo';
import RemoveTodo from './src/components/RemoveTodo';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome5';
import ENIcon from 'react-native-vector-icons/dist/Entypo';
import MAIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      {/* Wrap the entire app inside SafeAreaProvider to handle safe areas for different devices */}
      <NavigationContainer>
        {/* Set up the NavigationContainer to manage the navigation state */}
        <Tab.Navigator
          screenOptions={{
            // Customize the appearance of the bottom tabs
            tabBarActiveColor: 'black',
            tabBarInactiveColor: 'gray',
            tabBarStyle: tw`bg-white`,
          }}
        >
          <Tab.Screen
            name="View"
            component={GetTodo}
            options={{
              // Add icon and customize options for the "View" tab
              tabBarIcon: ({color}) => <FAIcon name="tasks" size={24} color={color} />,
            }}
          />
          <Tab.Screen
            name="Edit"
            component={UpdateTodos}
            options={{
              // Add icon and customize options for the "Edit" tab
              tabBarIcon: ({color}) => <FAIcon name="edit" size={24} color={color} />,
            }}
          />
          <Tab.Screen
            name="Add"
            component={AddTodo}
            options={{
              // Add icon and customize options for the "Add" tab
              tabBarIcon: ({color}) => <ENIcon name="add-to-list" size={24} color={color} />,
            }}
          />
          <Tab.Screen
            name="Remove"
            component={RemoveTodo}
            options={{
              // Add icon and customize options for the "Remove" tab
              tabBarIcon: ({color}) => <MAIcon name="delete-outline" size={24} color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
