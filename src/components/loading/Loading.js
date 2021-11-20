import styles from '../loading/Loading.module.css'
import imgLoading from '../loading/Rolling-1s-200px.gif'

const Loading = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgLoading} alt="image loading" />
    </div>
  )
}

export default Loading;
