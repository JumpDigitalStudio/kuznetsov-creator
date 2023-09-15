import {Sandpack} from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";
import styles from './playground.module.css'
import {Link} from "react-router-dom";

const PlaygroundScreen = () => {
    const files = {
        "/App.js":
            `import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Привет, красавчик 👋🏻</h1>
      <p>Помнишь счетчик лайков на главной странице? Теперь у тебя есть свой!</p>
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
`
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.column}>
                        <h1>Почувствуй<br/>
                            <span className='text-gradient'> мощь JavaScript</span>
                        </h1>
                        <p>
                            На моей Игровой Площадке ты сможешь освоить JavaScript &mdash; язык, который делает веб
                            интерактивным и захватывающим.
                            <br/>
                            <b>А сейчас нажми кнопку <span className='text-gradient'>"Run"</span>, чтобы увидеть магию!</b>
                        </p>
                        <div className={styles.buttons}>
                            <Link to='/' className='button button__outline'>
                                На главную
                            </Link>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.sandbox}>
                            <Sandpack
                                files={files}
                                theme={atomDark}
                                template="react"
                                options={{
                                    editorHeight: 350,
                                    autorun: false,
                                    showConsoleButton: true,
                                    showInlineErrors: false,
                                    showNavigator: false,
                                    showLineNumbers: false,
                                    showTabs: false,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlaygroundScreen