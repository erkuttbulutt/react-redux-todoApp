import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  destroy,
  toggle,
  selectFilteredTodos,
} from "../redux/todos/todosSlice";

// let filtered = [];

function TodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);
  //* Burada items'ı seçmek için kullanılan state.todos.items yöntemi diğer componentlerde de kullanılabilir. Ve bu state ismini değiştirmek istediğimizde her component'te de bunu değiştirmemiz gerekir. O yüzden selector kavramını kullanabiliriz.
  // const items = useSelector((state) => state.todos.items);
  // const items = useSelector(selectTodos);
  // const activeFilter = useSelector((state) => state.todos.activeFilter);

  const handleDestroy = (id) => {
    if (window.confirm("Are You Sure?")) {
      dispatch(destroy(id));
    }
  };
  //* Yine selector kullanarak bu filtre işlemini diğer componentlerde de kullabilmek için todoSlice'a yazıyoruz.
  // filtered = items;
  // if (activeFilter !== "all") {
  //   filtered = items.filter((todo) =>
  //     activeFilter === "active"
  //       ? todo.completed === false
  //       : todo.completed === true
  //   );
  // }

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
