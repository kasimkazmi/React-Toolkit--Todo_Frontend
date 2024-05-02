import React from "react";
import { TodoForm, TodoList } from "./components";
import { useSelector } from "react-redux";

export default function App() {
  const data = useSelector((state) => state.todos);

  return (
    <div className=" bg-gray-900 ">
      <div className=" w-full h-screen  max-w-xl mx-auto">
        <div className="  text-white ">Todo app using ReduxToolkit</div>
        <TodoForm />
        {data.map((item) => (
          <TodoList key={item.id} todo={item} />
        ))}
      </div>
    </div>
  );
}
