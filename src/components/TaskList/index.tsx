import styles from './styles.module.css'

import { v4 as uuidv4 } from 'uuid';
import { Circle, CheckCircle, Trash } from 'phosphor-react';
const mok = [
  {
    id: uuidv4(),
    content: 'Fazer um bolo',
    done: false,
  },
  {
    id: uuidv4(),
    content: 'Ir caminhar',
    done: false,
  },
  {
    id: uuidv4(),
    content: 'Terminar o curso',
    done: false,
  },
  {
    id: uuidv4(),
    content: 'Visitar um parente',
    done: true,
  }
]

export function TaskList(){


  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerWrapper}>
            <p 
              className={styles.createdTasks}
            >
              Tarefas criadas
            </p>
            <span>4</span>
          </div>
          <div className={styles.headerWrapper}>
            <p
              className={styles.doneTasks}
            >
              Concluídas
            </p>
            <span>1 de 3</span>
          </div>
        </div>
        <div className={styles.main}>
          <ul>
          {mok.map((task)=>{
            return(
              <>
                <li key={task.id}>
                  <span>
                    <Circle 
                      size={17.5}
                      color="var(--blue)"
                    /></span>
                  <p>{task.content}</p>
                  <span><Trash/></span>
                </li>
              </>
            )
          })}
          </ul>
        </div>
      </div>
      
    </div>
  )
}