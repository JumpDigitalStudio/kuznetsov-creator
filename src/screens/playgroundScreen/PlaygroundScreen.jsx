import {Sandpack} from "@codesandbox/sandpack-react";
import {atomDark} from "@codesandbox/sandpack-themes";
import styles from './playground.module.css'
import {Link} from "react-router-dom";
import {playgroundCode} from "./playgroundCode.js";

const PlaygroundScreen = () => {
    const files = {
        "/App.js": playgroundCode
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.section__content}>
                    <div className={styles.section__column}>
                        <h1>Почувствуй<br/>
                            <span className='text-gradient'> мощь JavaScript</span>
                        </h1>
                        <p>
                            На моей Игровой Площадке ты сможешь освоить JavaScript &mdash; язык, который делает веб
                            интерактивным и захватывающим. <b>А&nbsp;сейчас нажми кнопку <span
                            className='text-gradient'>&quot;Запустить&quot;</span>, чтобы увидеть магию!</b>
                        </p>
                        <div className={styles.section__buttons}>
                            <Link to='/' className='button button__outline'>На главную</Link>
                        </div>
                    </div>
                    <div className={styles.section__column}>
                        <div className={styles.section__sandbox}>
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