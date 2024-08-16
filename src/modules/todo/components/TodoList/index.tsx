'use client'

import TodoCard from "@/modules/todo/components/TodoCard";
import useGetAllTodos from "@/modules/todo/hooks/useGetAllTodos";
import {useEffect} from "react";
import {useToast} from "@/components/ui/use-toast";


const TodoList = () => {
    const { todos, isLoading, isError, isSuccess } = useGetAllTodos()
    const { toast } = useToast();

    useEffect(() => {
        if (isError) {
            toast({
                title: "An error has occurred, cannot fetch todo items"
            })
        }
    }, [isError]);

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "Successfully fetched the todo items"
            })
        }
    }, [isSuccess]);

    return (
        <div>
            {isLoading && <div className={"text-center"}>Loading..</div>}
            <div className={"grid grid-cols-2 gap-[24px]"}>
                {todos.map(todo => {
                    return (
                         <TodoCard todo={todo} key={`todo-card-${todo.id}`} />
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList;