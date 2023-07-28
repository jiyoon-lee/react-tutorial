import React, { memo, useCallback, useMemo, useReducer } from "react";
import { personReducer } from "./reducer/person-reducer";

export default function AppMentorsButton() {
  const initialPeron = {
    name: "지윤",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어 개발자",
      },
      { name: "제임스", title: "시니어 개발자" },
    ],
  };
  const [person, dispatch] = useReducer(personReducer, initialPeron);
  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  }, []);
  const handleAdd = useCallback(() => {
    const name = prompt(`추가할 멘토의 이름을 입력하세요.`);
    const title = prompt(`추가할 멘토의 타이틀을 입력하세요.`);
    dispatch({ type: "added", name, title });
  }, []);
  const handleDelete = useCallback(() => {
    const name = prompt(`삭제할 멘토의 이름을 입력하세요.`);
    dispatch({ type: "deleted", name });
  }, []);
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text="멘토의 이름 바꾸기" onClick={handleUpdate} />
      <Button text="멘토 추가하기" onClick={handleAdd} />
      <Button text="멘토 삭제하기" onClick={handleDelete} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-render😘");
  // const result = caclulateSomething();
  const result = useMemo(() => caclulateSomething(), []);
  return (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
      onClick={onClick}
    >
      `{text} {result}`
    </button>
  );
});

function caclulateSomething() {
  for (let i = 0; i < 1000; i++) {
    console.log("😂");
  }
  return 10;
}
