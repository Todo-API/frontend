import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle creating a new todo
  const handleCreate = async () => {
    try {
      const response = await axios.post('http://192.168.0.101:8080/api/v1/todos', {
        title,
        description,
      });
      // Optionally, you can perform some action after successful creation
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={tw`bg-white rounded-lg p-4 m-4 mb-4 shadow`}>
        <Text style={tw`text-black text-lg font-bold mb-2`}>Create Todo</Text>
        <TextInput
          style={tw`border border-black p-2 mb-2 text-black`}
          placeholder="Title"
          placeholderTextColor="black" // Set placeholder text color
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={tw`border border-black p-2 mb-4 text-black`}
          placeholder="Description"
          placeholderTextColor="black" // Set placeholder text color
          value={description}
          onChangeText={setDescription}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 p-2 rounded`}
          onPress={handleCreate} // Call handleCreate when the button is pressed
        >
          <Text style={tw`text-white text-center`}>Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;
