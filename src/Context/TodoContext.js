import { createContext, useContext, useState } from 'react'
import axios from 'axios'


const TodoContext = createContext()

export function useTasks() {
    return useContext(TodoContext)
}

export function TodoProvider({ children }) {
    const [debug, setDebug] = useState("Hii")
    const [todos, setTodos] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://192.168.83.12:8080/api/v1/todos');
            return (response.data.data); // Update the todos state with response data
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const value = {
        currentUser: "Durgesh",
        fetchData
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}