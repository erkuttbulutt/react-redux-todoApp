import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newTodo } from "../redux/todos/todosSlice";

function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();
    //* Başka compenentte newTodo yapmak istediğimizde tekrar aynı işlemleri yapmak zorundayız. Bu yüzden bu işlemi todoSlice'a(prepare) alıyoruz.
    // dispatch(newTodo({ id: nanoid(2), title, completed: false }));
    dispatch(newTodo({ title}));
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default Form;
