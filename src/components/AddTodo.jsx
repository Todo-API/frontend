import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';

const AddTodo = () => {
  // State variables to store the todo title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle creating a new todo
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
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-1 bg-gray-100 p-4 justify-center`}>
        <View style={tw`bg-white rounded-lg p-6 shadow`}>
          {/* Title */}
          <Text style={tw`text-black text-2xl font-bold mb-4`}>Create Todo</Text>
          
          {/* Title Input */}
          <TextInput
            style={tw`border border-gray-300 rounded p-3 mb-3 text-black`}
            placeholder="Title"
            placeholderTextColor="gray" // Set placeholder text color
            value={title}
            onChangeText={setTitle}
          />
          
          {/* Description Input */}
          <TextInput
            style={tw`border border-gray-300 rounded p-3 mb-6 text-black`}
            placeholder="Description"
            placeholderTextColor="gray" // Set placeholder text color
            value={description}
            onChangeText={setDescription}
          />
          
          {/* Create Button */}
          <TouchableOpacity
            style={tw`bg-blue-500 p-3 rounded`}
            onPress={handleCreate}
          >
            <Text style={tw`text-white text-center text-lg`}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;
