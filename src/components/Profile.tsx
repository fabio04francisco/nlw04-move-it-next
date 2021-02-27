import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/fabio04francisco.png" alt="Fábio Francisco"/>

      <div>
        <strong>Fábio Francisco</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
        
      </div>
    </div>
  )
}