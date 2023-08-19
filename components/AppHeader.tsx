import Link from 'next/link'
import styles from './AppHeader.module.scss'
import Image from 'next/image'

const Header = ({ title = '' }: { title?: string }) => {
  return (
    <div className={styles.header}>
      <div className={styles.center}>
        <span className={styles['logo-wrapper']}>
          <Link href="/" replace={true}>
            <Image
              className={styles.logo}
              src="/logo.png"
              alt={'ロゴ画像'}
              width={480 / 3}
              height={200 / 3}
              priority
            />
          </Link>
        </span>
        <p>{ title }</p>
      </div>
    </div>
  )
}

export default Header
