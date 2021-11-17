import { useState, useEffect } from "react";
import "./styles.css";

function Todo() {
  const [toDoList, settoDoList] = useState([
    {
      name: "task1",
      status: "completed",
    },
    {
      name: "task2",
      status: "completed",
    },
    {
      name: "task3",
      status: "",
    },
  ]);

  const [oldList, setoldList] = useState([]);
  const [form, setForm] = useState({
    taskName: "",
    taskStatus: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (form.taskName !== "") {
        settoDoList([...toDoList, { name: form.taskName, status: "" }]);
      }
    }
    // setForm({ taskName: "" });
  };

  const CheckedTast = (i) => {
    toDoList[i].status === "completed"
      ? (toDoList[i].status = "")
      : (toDoList[i].status = "completed");
    settoDoList([...toDoList]);
  };

  const clearData = () => {
    settoDoList([]);
  };
  const deleteItem = (i) => {
    // console.log("tam", toDoList);
    // const data = toDoList.splice(i, 1);
    // console.log("silinecek", data);

    const filtered = toDoList.filter((e) => {
      return e.Name === toDoList[i].name;
    });
    console.log(filtered);
    // settoDoList(filtered);
  };
  const getAllData = () => {
    settoDoList(toDoList);
  };

  const complatedList = () => {
    settoDoList(oldList);
    const data = toDoList.filter((item) => {
      return item.status === "completed";
    });
    settoDoList(data);
  };
  const ActiveList = (e) => {
    setoldList(toDoList);
    const data = toDoList.filter((item) => {
      return item.status === "";
    });
    settoDoList(data);
  };
  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>ToDo List</h1>
          <form>
            <input
              // value={taskNameInput}
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              onChange={onChange}
              name="taskName"
              onKeyPress={handlePress}
            />
            <input hidden readOnly name="taskStatus" />
          </form>
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {toDoList.map((item, i) => (
              <li key={i} className={item.status}>
                <div className="view">
                  <input
                    onClick={() => CheckedTast(i)}
                    className="toggle"
                    type="checkbox"
                    checked={item.status === "completed" ? true : false}
                  />
                  <label>{item.name}</label>
                  <button
                    onClick={() => deleteItem(i)}
                    className="destroy"
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>{toDoList.length}</strong>
            items left
          </span>
          <ul className="filters">
            <li>
              <a className="" onClick={getAllData}>
                All
              </a>
            </li>
            <li>
              <a onClick={ActiveList}>Active</a>
            </li>
            <li>
              <a onClick={complatedList}>Completed</a>
            </li>
          </ul>
          <button className="clear-completed" onClick={clearData}>
            Clear completed
          </button>
        </footer>
      </section>
    </>
  );
}

export default Todo;
