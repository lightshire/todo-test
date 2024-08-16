import {useEffect, useMemo, useState} from "react";
import TodoItem from "@/modules/todo/types/TodoItem";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const useGetAllTodos = () => {
    const { isLoading, isError, isSuccess, data }  = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get('https://dummyjson.com/todos')
    })

    const todos = useMemo(() => {
        return data?.data?.todos || [];
    }, [data])

    return {
        isLoading,
        isError,
        isSuccess,
        todos,
    }
}

export default useGetAllTodos;