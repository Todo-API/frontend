import { createContext, useContext, useState } from 'react'
import axios from 'axios'


const TodoContext = createContext()

export function useTasks() {
    return useContext(TodoContext)
}

export function TodoProvider({ children }) {
    const [debug, setDebug] = useState("Hii")
    const [todos, setTodos] = useState([]);

    const fetchData = async (num) => {
        try {
            const response = await axios.get('http://192.168.0.101:8080/api/v1/todos');
            console.log("a number"+num)
            return (response.data.data); 
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const deleteData = async (_id) => {
        try {
          console.log('Deleting todo with _id:', _id);
          const response = await axios.delete(`http://192.168.0.101:8080/api/v1/todos/${_id}`);
          console.log('Delete response:', response);
          // setTodos(response.data.data);
          return response.data.data;
        } catch (error) {
          console.error('Error deleting todo:', error);
        }
      };
    const value = {
        currentUser: "Durgesh",
        fetchData,
        deleteData
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}