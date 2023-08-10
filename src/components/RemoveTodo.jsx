import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import tw from 'twrnc';
import React, { useContext, useState, useEffect } from 'react'
import { TodoProvider, useTasks } from '../Context/TodoContext';


// Format the date and time
const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleString();
};

const RemoveTodo = () => {
  // 
  // const todos = await fetchData()
  console.log("I ran ")
  const [todos, setTodos] = useState([])

  const { fetchData } = useTasks()

  useEffect( async () => {
    console.log("I ran ")
    setTodos( await fetchData())
  }, [])
  
  console.log(todos)
  const [refreshing, setRefreshing] = useState(false);
  // const todo = useContext(TodoContext)
  // const { tasks } = todo
  // console.log(tasks)

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
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
              console.log(todo)
              return <TaskCard 
                title={todo.title} description={todo.description} isComplete={todo.isComplete} createdAt={todo.createdAt}  updatedAt={todo.updateAt} 
              />
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
  );
};

export default RemoveTodo