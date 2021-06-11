import "./App.css";
import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import Todolist from "./Todolist";
import Fanito from "./Fanito";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtertodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocaltodos();
  }, []);

  useEffect(() => {
    fliterHandler();
    saveLocaltodos();
  }, [todos, status]);

  const fliterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocaltodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocaltodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todolocal = localStorage.getItem("todos");
      setTodos(JSON.parse(todolocal));
    }
  };
  return (
    <div className="App">
      <Fanito />
      <h2>To do by ~stefania</h2>
      <Entry
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Todolist filtertodos={filtertodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
