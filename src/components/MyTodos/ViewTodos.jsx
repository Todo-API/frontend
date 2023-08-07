import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import axios from 'axios';

const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleString();
};

const TaskCard = ({ title, description, isComplete, createdAt, updatedAt }) => {
  return (
    <View style={tw`bg-white rounded-lg p-4 mb-4 shadow`}>
      <Text style={tw`text-black text-lg font-bold`}>{title}</Text>
      <Text style={tw`text-gray-600 mb-2`}>{description}</Text>
      <Text style={[tw`mb-1`, isComplete ? tw`text-green-500` : tw`text-red-500`]}>
        {isComplete ? 'Completed' : 'Incomplete'}
      </Text>
      <Text style={tw`text-gray-400 mb-1`}>Created At: {formatDateTime(createdAt)}</Text>
      <Text style={tw`text-gray-400`}>Updated At: {formatDateTime(updatedAt)}</Text>
    </View>
  );
};

const ViewTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://192.168.0.100:8080/api/v1/todos`);
      setTodos(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`p-4`}>
        <Text style={tw`text-black text-2xl font-bold mb-4`}>View Todos</Text>
        <ScrollView style={tw`mb-10`}>
          {todos.map(todo => (
            <TaskCard
              key={todo._id}
              title={todo.title}
              description={todo.description}
              isComplete={todo.isComplete}
              createdAt={todo.createdAt}
              updatedAt={todo.updatedAt}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ViewTodos;
