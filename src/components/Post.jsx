import {format, formatDistanceToNow} from 'date-fns'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'


export function Post({author, publishedAt, content }) {
  const [comments, setComments] = useState([
    1,
    2,
  ])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
    {locale: ptBR}
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  }) 

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, comments.length+1]);
    console.log(comments) 
  }

  return (
    <article className={styles.post}>
      <header>  
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
    
      <div className={styles.content}>
        {content.map(line=>{
          if(line.type === 'paragraph'){
            // eslint-disable-next-line react/jsx-key
            return <p>{line.content}</p>
          }else if (line.type === 'link'){
            // eslint-disable-next-line react/jsx-key
            return <p><a>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentario'
        />
        <footer>
        <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment=>{
          // eslint-disable-next-line react/jsx-key
          return <Comment />
        })}
      </div>
    </article>
  )
}