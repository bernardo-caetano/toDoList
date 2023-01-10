import styles from './styles.module.css';

import rocket from '../../assets/rocket.svg'

export function Header(){
  return(
    <header>
      <div className={styles.logo}>
        <img src={rocket} />
        <span className={styles.to}>to</span><span className={styles.do}>do</span>
      </div>
    </header>
  )
}