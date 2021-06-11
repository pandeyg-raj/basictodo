import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function Entry({ setStatus, inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="entry">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler}>
        <FontAwesomeIcon className="plane" icon={faPaperPlane} />
      </button>

      <div className="filter">
        <select onChange={statusHandler} name="todos" className="select">
          <option value="all">All</option>
          <option value="completed">Done</option>
          <option value="uncompleted">Not-Done</option>
        </select>
      </div>
    </form>
  );
}

export default Entry;
