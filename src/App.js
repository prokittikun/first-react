import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";

function App() {
  const [TodoList, setTodoList] = useState([]);

  const [Title, setTitle] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    if (Title.length === 0) return;
    setTodoList([...TodoList, Title]);
    setTitle("");
  };
  useEffect(() => {
    console.log("TodoList ->", TodoList);
  }, [TodoList]);
  return (
    <div>
      <Navbar title="Todo list" />
      <form onSubmit={Submit} className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Test</label>
          <input
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ul>
        {TodoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
