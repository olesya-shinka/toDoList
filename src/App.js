import "./App.css";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="add todo" />
      <button type="button" className="add-button">
        add
      </button>
      <ul className="list-todo">
        <li className="list-todo-item">to do</li>
      </ul>
    </div>
  );
}

export default App;
