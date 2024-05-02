import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../features/todoSlice/todoSlice";

export default function TodoList({ todo }) {
  const [isUpdate, setisUpdate] = useState(todo.Text);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  return (
    <>
      <div className="flex w-full items-center border-black/10 px-3 py-2 gap-x-3 shadow-l">
        <input
          onChange={() => {
            dispatch(toggleTodo({id:todo.id}));
          }}
          checked={todo.Status}
          type="checkbox"
          className="cursor-pointer whitespace-pre-wrap size-6 scale-150 overflow-wrap-break-word"
        />
        <input
          value={isUpdate}
          ref={inputRef}
          readOnly={!isEdit}
          type="text"
          onChange={(e) => {
            if (inputRef?.current?.value.length < 3)
              dispatch(deleteTodo(todo.id));
            setisUpdate(e.target.value);
          }}
          className={`${
            todo.Status && " border-0 line-through outline-none bg-red-600"
          } outline-none text-black w-[500px] rounded-lg p-2 duration-200`}
        />
        <button
          onClick={() => {
            if (todo.Status) return;
            isEdit
              ? dispatch(updateTodo({ Text: isUpdate, id: todo.id })) &&
                setIsEdit(false)
              : setIsEdit(!isEdit);
          }}
          className="text-xl bg-inherit hover:brightness-75 p-2 text-green-500"
        >
          {isEdit ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
          className="text-xl hover:brightness-75 bg-inherit p-2 text-red-500"
        >
          Delete
        </button>
      </div>
    </>
  );
}
