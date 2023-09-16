export const playgroundCode = `import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Привет, красавчик 👋🏻</h1>
      <p>
        Помнишь счетчик лайков на главной странице?
        Теперь у тебя есть свой!
      </p>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Всего {count} 🔥
    </button>
  );
}
`;