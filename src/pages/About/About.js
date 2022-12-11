import styles from './About.module.css'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o Game <span>News</span></h1>
      <p>Este projeto consiste em criar um blog para compartilhar notícias sobre jogos em react</p>
      <Link to="/posts/create" className='btn'>Criar Post</Link>
    </div>
  )
}

export default About