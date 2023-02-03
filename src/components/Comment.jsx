import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder src="https://github.com/marianaemanuelle.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mariana Fernandes</strong>
                            <time title="20 de Novembro às 08:39h" dateTime="2022-11-20 08:39:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash  size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                   <button> 
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}