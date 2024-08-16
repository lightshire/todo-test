import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import TodoForm from "@/modules/todo/components/TodoForm";
import TodoList from "@/modules/todo/components/TodoList";

export default function Home() {


  return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
  );
}
