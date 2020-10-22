import React from "react";

const App = () => {
  let todo = [
    {
      text: "Выпить пива",
      done: false,
    },
    {
      text: "Поссать",
      done: false,
    },
  ];

  const onChangeCheckbox = (index) => {
    return (todo[index].done = !todo[index].done);
  };
  const onClick = () => {
    todo.push(inputValue);
    console.log(todo);
  };

  let inputValue = {
    text: "",
    done: false,
  };

  const onChange = (e) => (inputValue.text = e.target.value);

  const Todo = (props) => {
    console.log(todo);
    return (
      <div>
        {props.text}
        <input
          type="checkbox"
          value={props.done}
          onChange={() => onChangeCheckbox(props.index)}
        />
        <button >Delete</button>
      </div>
    );
  };

  return (
    <div>
      {todo.map((todo, index) => (
        <div key={index}>
          <Todo content={todo} key={index} />
        </div>
      ))}
      <div>
        <input placeholder="Insert new todo" onChange={onChange} />
        <button onClick={onClick}>Add todo</button>
      </div>
    </div>
  );
};

export default App;
