'use client'

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import useSaveTodo from "@/modules/todo/hooks/useSaveTodo";
import {useToast} from "@/components/ui/use-toast";
import {useEffect} from "react";

const TodoForm = () => {
    const { todo, setTodo, isSuccess, isError, isLoading, onSubmit } = useSaveTodo();
    const { toast } = useToast();

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "Successfully saved Todo Item"
            })
        }
    }, [isSuccess]);

    return (
        <div className={"p-[8px]"}>
            <div className={"my-[24px] space-y-[8px]"}>
                <Input value={todo} onChange={(e) => setTodo(e.currentTarget.value)} placeholder={"Todo Description"}/>
            </div>
            <div className={"text-right"}>
                <Button disabled={isLoading} onClick={() => onSubmit()}>{isLoading ? "Saving.." : "Save"}</Button>
            </div>
        </div>
    )
}

export default TodoForm;