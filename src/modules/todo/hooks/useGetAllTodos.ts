import {useState} from "react";
import TodoItem from "@/modules/todo/types/TodoItem";
import axios from "axios";

const useGetAllTodos = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [todos, setTodos] = useState<TodoItem[]>([]);

    const fetchTodos = async () => {
        setIsLoading(true);

        try {
            const data =  await axios.get('https://dummyjson.com/todos');
            setTodos(data.data.todos);
            setIsLoaded(true);
            setIsSuccess(true);
            setIsError(false)
        } catch (e) {
            setIsError(true);
            setIsSuccess(false)
        }

        setIsLoading(false);
    }

    return {
        isLoaded,
        isLoading,
        isError,
        isSuccess,
        todos,
        fetchTodos
    }
}

export default useGetAllTodos;