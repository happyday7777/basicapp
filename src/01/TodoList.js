import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "공부하기" },
    { id: 2, text: "운동하기" },
    { id: 3, text: "청소하기" },
  ]);

  const removeFirst = () => {
    setTodos(todos.slice(1));
  };

  // 체크박스 상태를 부모에서 관리
  const handleCheck = (id, checked) => {
    console.log({ id, checked }); 
    // 예: { id: 2, checked: true }
    // 여기서 필요한 로직(예: 상태 업데이트, 서버 전송 등)을 추가할 수 있음
  };

  return (
    <div>
      <button onClick={removeFirst}>첫 번째 삭제</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onCheck={handleCheck}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ id, text, onCheck }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onCheck(id, newChecked); // 부모에게 id와 체크 상태 전달
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {text}
    </li>
  );
}

export default TodoList;
