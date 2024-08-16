'use client'

import TodoForm from "@/modules/todo/components/TodoForm";
import TodoList from "@/modules/todo/components/TodoList";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient();
export default function Home() {
  return (
      <QueryClientProvider client={queryClient}>
          <TodoForm />
          <TodoList />
      </QueryClientProvider>
  );
}
