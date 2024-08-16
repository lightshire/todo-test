import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import TodoItem from "@/modules/todo/types/TodoItem";

interface Props {
    todo: TodoItem,
}

const TodoCard = ({ todo }: Props) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Todo #{todo.id}</CardTitle>
                <CardDescription>{todo.todo}</CardDescription>
            </CardHeader>
            <CardFooter className={"flex items-center justify-end"}>
                <Button variant={"success"} disabled={todo.completed}>Mark as Done</Button>
            </CardFooter>
        </Card>
    )
}

export default TodoCard;