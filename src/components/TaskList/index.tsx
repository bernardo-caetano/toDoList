import styles from './styles.module.css'

import { v4 as uuidv4 } from 'uuid';
import { Circle, CheckCircle, Trash, ClipboardText } from 'phosphor-react';
import { useState } from 'react';

interface mok {
  id?: string;
  content?: string;
  done?: boolean;
}


const mok:mok[] = [
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

  const [taskList,setTaskList] = useState<mok[]>([...mok])

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

        {taskList.length != 0 ? (
        <div className={styles.main}>
          <ul>
          {taskList.map((task)=>{
            return(
                <li key={task.id}>
                  <span>
                    <Circle 
                      size={17.5}
                      color="var(--blue)"
                    /></span>
                  <p>{task.content}</p>
                  <span><Trash/></span>
                </li>
            )
          })}
          </ul>
        </div>
        ) : (
          <div className={styles.mainEmpty}>
            <hr/>
            <ClipboardText
              size={56}
              color="var(--gray-400)"
              />
            <div className={styles.mainEmptyContent}>
              <p style={{fontWeight: '700'}}>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
}