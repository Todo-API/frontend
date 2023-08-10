import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import tw from 'twrnc';
// import axios from 'axios';
import { useTasks } from '../../Context/TodoContext';


// Format the date and time
const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleString();
};

const ViewTodos = () => {
  const [todos, setTodos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  const { fetchData } = useTasks()

  useEffect( async () => {
    // console.log("I ran ")
    setTodos( await fetchData())
  }, [])

  // Fetch data from the API
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://192.168.83.12:8080/api/v1/todos');
  //     setTodos(response.data.data); // Update the todos state with response data
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // Handle the refresh action
  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  // Task card component
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

  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts
  // }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`p-4`}>
        <Text style={tw`text-black text-2xl font-bold mb-4`}>View Todos</Text>
        <ScrollView
          style={tw`mb-10`}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          {todos.map((todo) => (
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
