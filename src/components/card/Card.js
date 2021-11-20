import styles from '../card/Card.module.css'

const Card = ({title, byline, abstract, url, imgTitle}) => {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.left}>
          {url ? <img src={url} width='200px' height='100px' alt={imgTitle}/> : <p>sem imagem</p>}
        </div>
        <div className={styles.rigth}>
          <div>
            {title ? <h3>{title}</h3> : <h3>Sem titulo</h3>}
          </div>
          <div>
            {byline ? <strong>{byline}</strong> : <div>Sem byline</div>}
          </div>
          <div>
            {abstract ? <p>{abstract}</p> : <div>Sem abstract</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
