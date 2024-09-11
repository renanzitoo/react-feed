import { Header } from "./components/Header"
import { Post } from "./components/Post"
import {Sidebar} from './components/Sidebar'

import styles from './App.module.css'

import './global.css'
function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Renanzitoo" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati velit aspernatur sunt qui repellat cum perferendis quos, odit asperiores cupiditate laboriosam maxime quaerat aliquam incidunt illum voluptatum ea eum aut."      
          />
          <Post 
            author = "Lelezitaa"
          />
        </main>
      </div>
    </div>
   
  )
}

export default App
