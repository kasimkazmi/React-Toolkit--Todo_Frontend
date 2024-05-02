import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo,  } from "../features/todoSlice/todoSlice";

export default function TodoForm() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    dispatch(addTodo(todo));
    console.log(todo, "todo");
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <section className="my-7 flex w-full">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Write todo."
          className="w-full border
           p-3 outline-none rounded-l-lg
           duration-150 text-black bg-white"
        />

        <button
          type="submit"
          className="  text-xl bg-green-600
         text-white px-4 py-1  rounded-r-lg"
        >
          Add
        </button>
      </section>
    </form>
  );
}
