import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import axios from 'axios'
import tw from 'twrnc';
import React, { useContext, useState, useEffect } from 'react'
import { TodoProvider, useTasks } from '../Context/TodoContext';

const RemoveTodo = () => {
  const [todos, setTodos] = useState([])

  // const deleteData = async (_id) => {
  //   try {
  //     console.log('Deleting todo with _id:', _id);
  //     const response = await axios.delete(`http://192.168.0.101:8080/api/v1/todos/${_id}`);
  //     console.log('Delete response:', response);
  //     // setTodos(response.data.data);
  //     return response.data.data;
  //   } catch (error) {
  //     console.error('Error deleting todo:', error);
  //   }
  // };

  const { fetchData, deleteData } = useTasks()

  useEffect(async () => {
    console.log("I ran fetch")
    setTodos(await fetchData())
  }, [])

  useEffect(async () => {
    console.log("I ran delete")
    await deleteData(_id);
  }, [])
  // useEffect(() => {
  //   deleteData()
  // }, [])

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await deleteData();
    setRefreshing(false);
  };

  const TaskCard = ({ _id, title, description, isComplete }) => {
    const handleDelete = async () => {
      console.log("I ran ")
      await deleteData(_id);
      // Remove the deleted todo from the UI
    setTodos(prevTodos => prevTodos.filter(todo => todo._id !== _id));
    };

    return (
      <View style={tw`bg-white rounded-lg p-4 mb-4 shadow`}>
        <Text style={tw`text-black text-lg font-bold`}>{title}</Text>
        <Text style={tw`text-gray-600 mb-2`}>{description}</Text>
        <Text style={[tw`mb-1 font-semibold`, isComplete ? tw`text-green-500` : tw`text-red-500`]}>
          {isComplete ? 'Completed' : 'Incomplete'}
        </Text>
        <TouchableOpacity onPress={handleDelete} style={tw`bg-red-500 p-2 rounded mt-2`}>
          <Text style={tw`text-white text-center`}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

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
          {todos.map((todo) => {
            return <TaskCard key={todo._id} _id={todo._id}
              title={todo.title} description={todo.description} isComplete={todo.isComplete}
            />
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RemoveTodo