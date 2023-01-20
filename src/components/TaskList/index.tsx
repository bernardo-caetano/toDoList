import styles from './styles.module.css'

import { v4 as uuidv4 } from 'uuid';
import { PlusCircle, Circle, CheckCircle, Trash, ClipboardText } from 'phosphor-react';
import { useState } from 'react';

interface data {
  id?: string;
  content?: string;
  done?: boolean;
}

export function TaskList(){

  const [taskList,setTaskList] = useState<data[]>([])
  const [newTaskText,setNewTaskText] = useState<string>('')

  const countDone = taskList.filter((task) => task.done)

  function handleCreateNewTask() {
    (event as Event).preventDefault();
    setTaskList(
      [...taskList,
        {
          id:uuidv4(),
          content:newTaskText,
          done:false
        }])
    setNewTaskText('')
  }

  function handleNewTaskChange(){
    setNewTaskText(((event as Event).target as HTMLInputElement).value)
  }

  function handleToggleCheckTask(id:string | undefined){
    const newTaskListWithCheckTask = taskList.map((task) => {
      if(task.id == id){
        return{...task,done:!task.done}
      }else{
        return{...task}
      }
    })
    setTaskList(newTaskListWithCheckTask)
  }

  function handleDeleteTask(id: string | undefined){
    const newTaskListWithoutDeleteOne = taskList.filter(task => task.id !== id)
    setTaskList(newTaskListWithoutDeleteOne)
  }

  return(
    <div className={styles.container}>
      <form onSubmit={handleCreateNewTask} className={styles.formContainer}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewTaskChange}
          value={newTaskText}
        />

        <button type="submit">
          Criar 
          <PlusCircle size={16}/>
        </button>

      </form>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerWrapper}>
            <p 
              className={styles.createdTasks}
            >
              Tarefas criadas
            </p>
            <span>{taskList.length}</span>
          </div>
          <div className={styles.headerWrapper}>
            <p
              className={styles.doneTasks}
            >
              Concluídas
            </p>
            <span>{countDone.length} de {taskList.length}</span>
          </div>
        </div>

        {taskList.length != 0 ? (
        <div className={styles.main}>
          <ul>
          {taskList.map((task)=>{
            return(
                <li key={task.id}>
                  <span
                    onClick={() => handleToggleCheckTask(task.id)}
                  >
                    {task.done ? (
                      <CheckCircle 
                      size={24}
                      color="var(--blue)"
                    />
                    ) : (
                      <Circle 
                      size={24}
                      color="var(--blue)"
                    />
                    )}
                    
                    </span>
                    {task.done ? (
                      <p
                        style={{color:'var(--gray-300)'}}
                      ><s>{task.content}</s></p>
                    ) : (
                      <p>{task.content}</p>
                    )}
                  <span
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <Trash size={24}/>
                  </span>
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