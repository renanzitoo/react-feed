import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>  
        <div className={styles.author}>
          <Avatar hasBorder={true} src="https://github.com/renanzitoo.png" />
          <div className={styles.authorInfo}>
            <strong>Renan Costa</strong>
            <span>Back-End</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>
          Publicado há 1h
        </time>
      </header>
    
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a>jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto</a>{' '} <a>#nlw</a>{' '} <a>#rocketseat</a></p>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentario'
        />
        <footer>
        <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
      </div>
    </article>
  )
}