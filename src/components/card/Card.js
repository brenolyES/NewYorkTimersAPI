import styles from '../card/Card.module.css'

const Card = () => {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.left}>
          <img src="" alt="Img" />
        </div>
        <div className={styles.rigth}>
          <div>
            <h2>Titulo da noticia{}</h2>
          </div>
          <div>
            <strong>Autor da noticia{}</strong>
          </div>
          <div>
            {/* <p>Descriçao da noticiasssssssssssssssssssssssssssss</p> */}
            <p>Descriçao da noticia{}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
