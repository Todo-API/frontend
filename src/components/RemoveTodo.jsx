import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import React, { useContext } from 'react'
import axios from 'axios';
import TodoContext from './MyTodos/TodoContext';

const RemoveTodo = () => {
  const todo = useContext(TodoContext)
  console.log(todo)

  const onDelete = (deletedTodoId) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo._id !== deletedTodoId));
  }
  const handleDelete = async () => {
    try {
      const data = await axios.delete(`http://192.168.0.101:8080/api/v1/todos/${todo._id}`);
      console.log(data)
      onDelete(todo._id); // Call the onDelete prop to update the UI
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };


  return (
    <SafeAreaView>
      <View style={tw`bg-white rounded-lg p-4 m-4 mb-4 shadow`}>
        <Text style={tw`text-black text-lg font-bold`}>{todo.title}</Text>
        <Text style={tw`text-gray-600 mb-2`}>{todo.description}</Text>
        <TouchableOpacity
          style={tw`bg-red-500 p-2 rounded`}
          onPress={handleDelete}
        >
          <Text style={tw`text-white text-center`}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RemoveTodo