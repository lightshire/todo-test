import {useState} from "react";
import axios from "axios";

const useSaveTodo = () => {
    const [todo, setTodo] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const onSubmit = async () => {
        setIsLoading(true);
        try {
            await axios.post('https://dummyjson.com/todos/add', {
                todo,
                userId: 5,
                completed: false
            });
            setIsSuccess(true);
        } catch (e) {
            setIsError(true);
        }
        setIsLoading(false);
    }

    return {
        todo,
        setTodo,
        isLoading,
        isSuccess,
        isError,
        onSubmit
    }
}

export default useSaveTodo;