import styles from './styles.module.css';
import { PlusCircle} from 'phosphor-react'
import { useState } from 'react';
export function InputTasks(){

  const [newTaskText,setNewTaskText] = useState<string | null>('')

  // function handleCreateNewTask(){
  //   event.preventDefault();

    
  // }

  function handleNewTaskChange(){
    // setNewTaskText(event.target)
    setNewTaskText((event.target as HTMLInputElement).value)
  }

  return(
    <form className={styles.container}>
      <textarea  
        
        placeholder='Adicione uma nova tarefa'
        onChange={handleNewTaskChange}
      />

      <button type="submit">
        Criar 
        <PlusCircle size={16}/>
      </button>

    </form>
  )
}