import Link from 'next/link'
import styles from './AppHeader.module.scss'

const Header = ({ title }: { title: string }) => {
  return (
    <div className={styles.header}>
      <div className={styles.center}>
        <span className={styles['logo-wrapper']}>
          <Link href="/" replace={true}>
            <img
              className={styles.logo}
              src="/logo.png"
            />
          </Link>
        </span>
        { title }
      </div>
    </div>
  )
}

export default Header
