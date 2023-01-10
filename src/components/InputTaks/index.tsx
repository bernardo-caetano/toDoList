import styles from './styles.module.css';
import { PlusCircle} from 'phosphor-react'
export function InputTaks(){
  return(
    <div className={styles.container}>
      <input
        type="text" 
        placeholder='Adicione uma nova tarefa'
      />

      <button type="submit">
        Criar 
        <PlusCircle size={16}/>
      </button>

    </div>
  )
}